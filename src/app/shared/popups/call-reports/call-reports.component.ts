import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { LiveMoniterSandbox } from 'src/app/pages/live-moniter/liveMoniter.sandbox';

@Component({
  selector: 'app-call-reports',
  templateUrl: './call-reports.component.html',
  styleUrls: ['./call-reports.component.scss']
})
export class CallReportsComponent implements OnInit {
  user: any = ''
  constructor(
    public activeModal: NgbActiveModal,
    public liveMoniterSandbox: LiveMoniterSandbox,
    public commonSandbox: CommonSandbox
  ) { }

  ngOnInit() {
    this.fetchTotalCallList()

  }
  fetchTotalCallList() {
    const params = {
      limit: 0,
      offset: 0,
      keyword: '',
      count: 0,
      customer_id: this.user.customer_id,
      agent_id: this.user.agent_id
    }
    this.liveMoniterSandbox.totalCallList(params)
  }
  onConfirm() {
    this.activeModal.close('success')
  }
  close() {
    this.activeModal.close();
  }

  export() {
    const params = {
      name: 'totalcalls',
      file: 'Total-call-list.xlsx',
      payload: {
        customer_id: this.user.customer_id
      }
    }
    this.commonSandbox.export(params)
  }

}
