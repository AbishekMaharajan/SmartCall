import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProjectsSandbox } from '../../projects.sandbox';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.scss']
})
export class AddTemplateComponent implements OnInit, OnDestroy {
  tempId: string = ''
  tempContent: string = ''
  public subscriptions: Array<Subscription> = [];
  constructor(
    public projectSandbox: ProjectsSandbox,
    public router: Router,
    public toster: ToastrService
  ) { }

  ngOnInit() {
  }
  onSave() {
    if (this.tempId == '' || this.tempContent == '') {
      return this.toster.error('Please provide valid Template Id & Template Content')
    }
    const params = {
      template_id: this.tempId,
      template_text: this.tempContent
    }
    this.projectSandbox.createTemplate(params)
    this.projectSandbox.createTemplate$.subscribe((res) => {
      if (res && res.status == 1) {
        this.router.navigate(['/projects/templates']);
      }
    })
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => data.unsubscribe())
  }
}
