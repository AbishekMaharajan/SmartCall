import { Component, OnDestroy, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { UsersSandbox } from 'src/app/pages/users/users.sandbox';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DaysMappedComponent } from 'src/app/shared/popups/days-mapped/days-mapped.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit, OnDestroy {
  faSearch = faSearch
  faUser = faUser
  orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id
  releasedAgentArr = []
  users = []
  projectArr = []
  userSearch = ''
  projectSearch = ''
  draggable = {
    data: "myDragData",
    effectAllowed: "all",
    dropEffect: 'move',
    disable: false,
    handle: false
  };
  public subscriptions: Array<Subscription> = [];

  constructor(
    public userSandbox: UsersSandbox,
    public toster: ToastrService,
    public modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.fetchAgentLsit()
    this.fetchProjectAgentMapingList()
  }

  fetchAgentLsit() {
    this.userSandbox.agentList(this.orgId)
    this.subscriptions.push(this.userSandbox.agentList$.pipe(take(2)).subscribe((res) => {
      if (res && res.length > 0) {
        this.users = res
      }
    }))
  }
  fetchProjectAgentMapingList() {
    this.userSandbox.mappingList(this.orgId)
    this.subscriptions.push(this.userSandbox.mappingList$.pipe(take(2)).subscribe((res) => {
      if (res && res.length > 0) {
        this.projectArr = res.map((data) => {
          data.json_data.forEach((agent) => {
            if (agent.days === 0) {
              agent.days = 1
            }
            agent.isnew = 0
          })
          return data
        })
      }
    }))
  }

  onMove(event, project) {
    const obj = project.json_data.find((agent) => agent.member_id == event.data.id)
    if (!obj) {
      project.json_data.push({ member_id: event.data.id, member_name: event.data.member_name, days: 0, isnew: 1 })
      return
    }
    this.toster.error('Agent alredy mapped to this project')

  }
  onAgentSearch() {
    this.users = this.users.filter((user) => user.member_name.toLowerCase().includes(this.userSearch.toLowerCase()))
  }
  onProjectSearch() {
    this.projectArr = this.projectArr.filter((project) => project.project_name.toLowerCase().includes(this.projectSearch.toLowerCase()))
  }
  onAgentKeypress(event) {
    if (this.userSearch === '' && event.key === "Backspace") {
      this.fetchAgentLsit()
    }
  }
  onProjectKeypress(event) {
    if (this.projectSearch === '' && event.key === "Backspace") {
      this.fetchProjectAgentMapingList()
    }
  }
  removeAgent(project, index) {
    const obj = project.json_data.splice(index, 1);
    if (obj[0].isnew === 0) {
      this.releasedAgentArr.push({ project_id: project.project_id, member_id: obj[0].member_id })
    }
  }
  onClickDays(project, agent) {

    const modalRef = this.modalService.open(DaysMappedComponent, {
      size: 'lg', centered: true, backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.user = agent;
    modalRef.componentInstance.project = project;
  }

  onSaveBtnClick() {
    let finalArr = []
    this.projectArr.forEach((data) => {
      data.json_data.forEach((el) => {
        el.project_id = data.project_id
        finalArr.push(el)
      })
    })

    const params = {
      organisation_id: this.orgId,
      existing_agents: finalArr,
      released_agents: this.releasedAgentArr
    }
    this.userSandbox.projectMapping(params)
    this.subscriptions.push(this.userSandbox.projectMapping$.subscribe((res) => {
      if (res && res.status === 1) {
        // this.fetchAgentLsit()
        this.fetchProjectAgentMapingList()
      }
    }))
  }

  onCancelBtnClick() {
    this.fetchAgentLsit()
    this.fetchProjectAgentMapingList()
  }

  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
