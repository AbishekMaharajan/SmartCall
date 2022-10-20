import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';
import { CommonSandbox } from 'src/app/common/common.sandbox';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('date') date: ElementRef;

  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  countObj: any = {}
  maxDate = moment().format("YYYY-MM-DD");
  dateValue = moment().format("YYYY-MM-DD")
  minDate = '1990-01-01'
  chartOptions: any = {

    title: {
      text: '',
      style: {
        color: '#555555',
        fontWeight: 600
      }
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date',
        style: {
          color: '#777777',
          fontWeight: 600
        }
      },

    },
    yAxis: {
      title: {
        text: 'Count',
        style: {
          color: '#777777',
          fontWeight: 600
        }
      },
    },
    credits: {
      enabled: false
    }, chart: {
      events: {
        load: function () {
          this.series.forEach((data, i) => (i === 0) ? data.show() : data.hide())
        },
      }
    },
    plotOptions: {
      series: {
        events: {
          legendItemClick(e) {
            e.preventDefault();
            this.chart.series.forEach(s => (s === this) ? s.show() : s.hide())
          }
        }
      }
    },
    series: [

      {
        data: [
          [Date.UTC(2010, 0, 1), 10],
          [Date.UTC(2010, 2, 1), 20],
          [Date.UTC(2010, 3, 1), 5],
          [Date.UTC(2010, 5, 5), 30],
          [Date.UTC(2010, 7, 7), 10],
          [Date.UTC(2010, 10, 8), 30],
        ],
        type: 'line',
        name: 'Total calls'
      },
      {
        data: [
          [Date.UTC(2010, 0, 1), 30],
          [Date.UTC(2010, 2, 1), 10],
          [Date.UTC(2010, 3, 1), 50],
          [Date.UTC(2010, 5, 5), 20],
          [Date.UTC(2010, 7, 7), 100],
          [Date.UTC(2010, 10, 8), 30],
        ],
        type: 'line',
        color: "#717ee3",
        name: 'Connected calls'
      },
      {
        data: [
          [Date.UTC(2010, 0, 1), 50],
          [Date.UTC(2010, 2, 1), 100],
          [Date.UTC(2010, 3, 1), 10],
          [Date.UTC(2010, 5, 5), 30],
          [Date.UTC(2010, 7, 7), 40],
          [Date.UTC(2010, 10, 8), 60],
        ],
        type: 'line',
        color: "#fe7883",
        name: 'Missed calls'
      },
      {
        data: [
          [Date.UTC(2010, 0, 1), 20],
          [Date.UTC(2010, 2, 1), 50],
          [Date.UTC(2010, 3, 1), 20],
          [Date.UTC(2010, 5, 5), 70],
          [Date.UTC(2010, 7, 7), 80],
          [Date.UTC(2010, 10, 8), 10],
        ],
        type: 'line',
        color: "#57cc99",
        name: 'Ongoing calls'
      },
      {
        data: [
          [Date.UTC(2010, 0, 1), 100],
          [Date.UTC(2010, 2, 1), 50],
          [Date.UTC(2010, 3, 1), 70],
          [Date.UTC(2010, 5, 5), 30],
          [Date.UTC(2010, 7, 7), 50],
          [Date.UTC(2010, 10, 8), 80],
        ],
        type: 'line',
        name: 'Bargin calls'
      },

    ],

  };
  constructor(public commonSandbox: CommonSandbox) { }

  ngOnInit() {
    this.fetchCallCount()
    this.fetchFollowupList()
  }
  fetchFollowupList() {
    const params = {
      followupdate: moment(this.dateValue).format("DD/MM/YYYY")
    }
    this.commonSandbox.followupList(params)

  }
  fetchCallCount() {
    const params = {
      followupdate: moment(this.dateValue).format("DD/MM/YYYY")
    }
    this.commonSandbox.todaysCallCount(params)
    this.commonSandbox.todaysCallCount$.subscribe((data) => {
      if (data && data.length > 0) {
        this.countObj = data[0]
      }
    })
  }
  onDateChange(event) {
    this.dateValue = moment(event.target.valueAsDate).format("YYYY-MM-DD")
    this.fetchCallCount()
    this.fetchFollowupList()
  }

}
