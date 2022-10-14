import { Component, OnInit } from '@angular/core';
import { faRectangleList, faSquareXmark, faShield, faUnlock, faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  faRectangleList = faRectangleList;
  faSquareXmark = faSquareXmark;
  faShield = faShield;
  faUnlock = faUnlock;
  faSearch = faSearch;
  constructor() { }

  ngOnInit() {
  }

}
