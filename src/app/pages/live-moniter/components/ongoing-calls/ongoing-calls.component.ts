import { AfterContentChecked, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LiveMoniterSandbox } from '../../liveMoniter.sandbox';
import { interval } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateLatestResponseComponent } from 'src/app/shared/popups/update-latest-response/update-latest-response.component';
@Component({
  selector: 'app-ongoing-calls',
  templateUrl: './ongoing-calls.component.html',
  styleUrls: ['./ongoing-calls.component.scss']
})
export class OngoingCallsComponent implements OnInit, OnDestroy {
  lastRefreshed: any = new Date().toLocaleTimeString()
  intervalFunc: any
  interval: number
  refreshArr = [
    { id: 2, name: '30 sec', sec: 30000 },
    { id: 3, name: '1 min', sec: 60000 },
    { id: 4, name: '5 min', sec: 300000 },
    { id: 5, name: 'Dont Referesh', sec: 0 },

  ]
  constructor(
    public liveMoniterSandbox: LiveMoniterSandbox,
    public router: Router,
    public modalService: NgbModal,

  ) { }


  ngOnInit() {
    this.interval = 60000;
    this.fetchOngoingCallList();
    this.refresh(this.interval)
  };
  fetchOngoingCallList() {
    const params = {
      user_type: JSON.parse(localStorage.getItem('userDetails')).user_type
    }
    this.liveMoniterSandbox.ongoingCallList(params)
  }

  refresh(sec) {
    this.intervalFunc = setInterval(() => {
      this.fetchOngoingCallList()
      this.lastRefreshed = new Date().toLocaleTimeString()
    }, sec);
  }

  onSelectRefresh(event) {
    this.lastRefreshed = new Date().toLocaleTimeString()

    if (this.intervalFunc) {
      clearInterval(this.intervalFunc)
    }

    if (event.sec > 0) {
      this.refresh(event.sec)
    }

  }

  customerDetails(user) {

    const modalRef = this.modalService.open(UpdateLatestResponseComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.user = user;
    modalRef.result.then((result) => {
      if (result) {

      }
    });
  }
  bargin(data) {

    const { mobile_number, member_id, phone_type, soft_phone_ip } = JSON.parse(localStorage.getItem('userDetails'))
    const params = {
      conference_id: data.conference_id,
      mobile_number: mobile_number,
      member_id: member_id,
      phone_type: phone_type,
      soft_phone_ip: soft_phone_ip
    }

    this.liveMoniterSandbox.bargin(params)
  }
  ngOnDestroy() {
    if (this.intervalFunc) {
      clearInterval(this.intervalFunc)
    }
  }
}
