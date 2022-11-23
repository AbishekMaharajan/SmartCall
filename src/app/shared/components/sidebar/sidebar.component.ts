import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faBars, faAngleDown, faBriefcase, faFile, faClapperboard, faGear, faRightToBracket, } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription, zip } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopupComponent } from '../../popups/confirmation-popup/confirmation-popup.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  isClicked: boolean = false

  faClapperboard = faClapperboard
  faGear = faGear
  faRightToBracket = faRightToBracket
  userData = JSON.parse(localStorage.getItem('userDetails'))
  activeMenu = '';
  disableMenu = ["Projects", "Manage DID", "Add New DID", "Users", "Project-Agent Mapping", "Reassign Agent", 'Blocked Customers', 'Whatsapp Templates']
  menu: any = [
    {
      title: 'Dashboard',
      main: [
        {
          icon: 'dashboard', title: 'My Dashboard', sub: [], isClicked: false, path: 'dashboard',
        },
      ],
    },
    {
      title: 'Project & DID',
      main: [
        {
          icon: 'home', title: 'Projects',
          isClicked: false,
          path: 'projects',
        },
        {
          icon: 'library_add', title: 'Add New DID',
          isClicked: false,
          path: 'did/add'
        },
        {
          icon: 'phone_in_talk', title: 'Manage DID',
          isClicked: false,
          path: 'did/manage'
        },

        {
          icon: 'mail_outline', title: 'Whatsapp Templates',
          isClicked: false,
          path: 'projects/templates'
        },
      ]
    },
    {
      title: 'Manage Users',
      main: [
        {
          icon: 'person', title: 'Users',
          isClicked: false,
          path: 'users'
        },
        {
          icon: 'map', title: 'Project-Agent Mapping',
          isClicked: false,
          path: 'agent-mapping'
        },
        {
          icon: 'insert_chart', title: 'Status Tracker',
          isClicked: false
          ,
          path: 'status-tracker'
        },
      ]
    },
    {
      title: 'Live Monitor',
      main: [
        {
          icon: 'phone_in_talk', title: 'Ongoing Calls',
          isClicked: false,
          path: 'live-moniter/ongoing-calls'
        },
        {
          icon: 'list_alt', title: 'Latest Responses',
          isClicked: false,
          path: 'live-moniter/response'

        },
      ]
    },
    {
      title: 'Customers / Prospects',
      main: [
        {
          icon: 'import_contacts', title: 'Customer Info',
          isClicked: false,
          path: 'customers/list'
        },
        {
          icon: 'description', title: 'Project / Agent Report',
          isClicked: false,
          path: 'customers/project-agent-report'
        },

        {
          icon: 'group', title: 'Reassign Agent',
          isClicked: false,
          path: 'customers/reassign'
        },
        {
          icon: 'block', title: 'Blocked Customers',
          isClicked: false,
          path: 'customers/blocked-customers'
        },

      ]
    },
    {
      title: 'Consolidated Reports',
      main: [
        {
          icon: 'date_range', title: 'Monthwise Call Count',
          isClicked: false,
          path: 'consolidated-reports/monthwise'
        },
        {
          icon: 'pie_chart', title: 'Agent / Project Call Count',
          isClicked: false,
          path: 'consolidated-reports/agent-project'
        },
      ]
    },
  ]

  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    public modalService: NgbModal,) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter(route => route.outlet === 'primary'))
      .pipe(mergeMap(route => route.data))
      .subscribe(event => {
        this.activeMenu = event['moduleUrl'];
      });

  }

  ngOnInit() {
    if (this.userData.user_type !== 1) {
      this.menu.forEach((data) => {
        data.main.forEach((item) => {
          const isFound = this.disableMenu.includes(item.title)
          item.isDisable = isFound
        })
      })
    }
  }
  ngAfterViewInit() {
    document.querySelector(".active")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
  }
  openMainMenu(nav: { path: any; }) {
    this.router.navigate([`${nav.path}`]);
  }

  logout() {
    const modalRef = this.modalService.open(ConfirmationPopupComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.moduleName = 'logout';
    modalRef.result.then((result) => {
      if (result == 'success') {
        localStorage.clear();
        this.router.navigate(['/auth']);

      }
    });

  }
}
