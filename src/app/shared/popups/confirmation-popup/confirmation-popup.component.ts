import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ProjectsSandbox } from 'src/app/pages/projects/projects.sandbox';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit, OnDestroy {
  moduleName = '';
  moduleData: any = '';
  public subscriptions: Array<Subscription> = [];
  constructor(
    public activeModal: NgbActiveModal,
    public projectsSandbox: ProjectsSandbox,
  ) { }

  ngOnInit() {
  }
  onConfirm() {
    if (this.moduleName == 'manageDID' || this.moduleName == 'reassignAllCustomers' || this.moduleName == 'deleteUser' || this.moduleName == "logout") {
      this.activeModal.close('success')
    }
    if (this.moduleName == 'deleteProject') {
      this.projectsSandbox.deleteProject(this.moduleData);
      this.subscriptions.push(this.projectsSandbox.deleteProject$.subscribe((res) => {
        if (res && res.status == 1) {
          this.activeModal.close('success')
        }
      }))
    }
  }
  close() {
    this.activeModal.close();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
