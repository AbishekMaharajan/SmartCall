import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersSandbox } from 'src/app/pages/users/users.sandbox';

@Component({
  selector: 'app-days-mapped',
  templateUrl: './days-mapped.component.html',
  styleUrls: ['./days-mapped.component.scss']
})
export class DaysMappedComponent implements OnInit, OnDestroy {
  user: any
  project: any
  days = 0
  constructor(public activeModal: NgbActiveModal,
    public usersSandbox: UsersSandbox,
  ) { }

  ngOnInit() {
    const params: any = {
      agent_id: this.user.member_id,
      project_id: this.project.project_id
    }
    this.usersSandbox.mappingHistory(params)
    this.usersSandbox.mappingHistory$.subscribe((res) => {
      if (res && res.length > 0) {
        this.days = res.reduce((sum, { duration }) => sum + duration, 0)
      }
      else this.days = this.user.days
    })
  }
  onConfirm() {
    this.activeModal.close('success')
  }
  close() {
    this.activeModal.close();
  }
  ngOnDestroy() {
    this.days = 0
  }
}
