import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProjectsSandbox } from '../../projects.sandbox';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit, OnDestroy {
  @ViewChild('filePath') filePath: ElementRef;
  orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id
  public createProjectForm: FormGroup;
  projectObj: any = ''
  files: any;
  file: any;
  fileType: any;
  fileTypeError: any;
  isSelected = false;
  postUrl = 'assets/imgs/users.svg';
  imagePost = '';
  projectId: number = 0
  public subscriptions: Array<Subscription> = [];

  constructor(public router: Router,
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public projectsSandbox: ProjectsSandbox,
    private toster: ToastrService,
  ) { }

  ngOnInit() {
    this.initCreateProjectForm()
    this.route.params.subscribe(param => {
      if (param.id) {
        this.projectId = param.id
        this.fetchEditProjectData(param.id)
      }
    });

  }

  initCreateProjectForm(): void {
    this.createProjectForm = this.fb.group({
      project_name: ['', Validators.required],
      project_code: ['', Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.createProjectForm.controls['status'].setValue('Ongoing');
  }
  onCreateProject(state): void {
    if (!this.createProjectForm.valid) {
      this.validateAllFormFields(this.createProjectForm);
      this.toster.error('Enter Valid Project Data')
      return
    }

    const params = this.createProjectForm.value
    params.logo = this.imagePost
    params.organisation_id = this.orgId
    params.project_id = this.projectId;
    params.logo_name = state
    if (this.projectId === 0) {
      this.projectsSandbox.createProject(params)
    } else {
      this.projectsSandbox.updateProject(params)
    }
  }

  fetchEditProjectData(id): void {
    this.projectsSandbox.fetchUpdateData(id);
    this.subscriptions.push(this.projectsSandbox.fetchUpdateData$.subscribe((res) => {
      if (res) {
        this.createProjectForm.controls['project_name'].setValue(res[0].project_name);
        this.createProjectForm.controls['project_code'].setValue(res[0].project_code);
        this.createProjectForm.controls['status'].setValue(res[0].status);
        this.createProjectForm.controls['description'].setValue(res[0].description);
        this.postUrl = res[0].project_logo
      }
    }))
  }

  onCreateBtnClick() {
    this.onCreateProject('')
  }
  onUpdateBtnClick() {
    this.onCreateProject('update')
  }
  onCancelBtnClick() {
    this.createProjectForm.reset();
    this.postUrl = ''
    this.imagePost = ''
    this.router.navigate(['projects/list'])
  }
  uploadButtonClick() {
    const el: HTMLElement = this.filePath.nativeElement as HTMLElement;
    el.click();
  }
  uploadImage(event) {
    this.fileTypeError = '';
    this.files = event.target.files;
    this.file = this.files[0];
    this.fileType = this.file.type;
    if (this.fileType.match(/image\/*/)) {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (events: any) => {
          this.isSelected = true;
          this.postUrl = events.target.result;
          this.imagePost = events.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    } else {
      this.fileTypeError = '(Only Images are allowed)';
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }

    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
