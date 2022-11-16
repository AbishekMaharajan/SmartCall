import { Component, OnInit } from '@angular/core';
import { ProjectsSandbox } from '../../projects.sandbox';

@Component({
  selector: 'app-whatsapp-templates',
  templateUrl: './whatsapp-templates.component.html',
  styleUrls: ['./whatsapp-templates.component.scss']
})
export class WhatsappTemplatesComponent implements OnInit {

  constructor(
    public projectSandbox: ProjectsSandbox,
  ) { }

  ngOnInit() {
    this.fetchTemplateList()
  }

  fetchTemplateList() {
    this.projectSandbox.getTemplateList({})
  }
}
