import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-leads',
  templateUrl: './online-leads.component.html',
  styleUrls: ['./online-leads.component.scss']
})
export class OnlineLeadsComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  onAddBtnClick() {
    this.router.navigate(['customers/add-customer'])
  }
}
