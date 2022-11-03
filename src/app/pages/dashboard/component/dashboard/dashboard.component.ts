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
  updateFlag = false
  countObj: any = {}
  maxDate = moment().format("YYYY-MM-DD");
  dateValue = moment().format("YYYY-MM-DD")
  callType: string = 'total'
  color = '#6633A6'
  title = 'Total Calls'
  chartData: any = [
    // [0.01, 10],
    // [1.01, 5],
    // [2.01, 5],
    // [3.01, 2],
    // [4.01, 30],
    // [5.01, 40],
    // [6.01, 30],
    // [7.01, 20],
    // [8.01, 50],
    // [9.01, 70],
    // [10.01, 90],
    // [11.01, 101],
    // [12.01, 10],
    // [13.01, 30],
    // [14.01, 20],
    // [15.01, 50],
    // [16.01, 80],
    // [17.01, 0],
    // [18.01, 10],
    // [19.01, 20],
    // [20.01, 20],
    // [21.01, 30],
    // [22.01, 50],
    // [23.01, 50],
  ];
  chartOptions: any = {
    title: {
      text: this.title,
      style: {
        color: '#555555',
        fontWeight: 600,
        fontSize: '1.6rem'
      }
    },
    xAxis: {
      type: 'time',

      title: {
        text: 'Hours of the Day',
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
      enabled: true
    }, chart: {
      events: {
        load: function () {
          this.series.forEach((data, i) => {
            (i === 0) ? data.show() : data.hide()
          })
        },
      }
    },
    plotOptions: {
      series: {
        events: {

          legendItemClick(e) {
            e.preventDefault();
            this.chart.series.forEach(s => {
              (s === this) ? s.show() : s.hide()
            })
          },
        }
      }
    },
    series: [

      {
        data: this.chartData,
        type: 'line',
        name: this.callType,
        showInLegend: false,
        color: this.color
      },

    ],

  };


  minDate = '1990-01-01'

  constructor(public commonSandbox: CommonSandbox) {

  }

  ngOnInit() {
    this.fetchCallCount();
    this.fetchFollowupList();
    this.getChartData()

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

  getChartData() {
    const params = {
      followupdate: moment(this.dateValue).format("DD/MM/YYYY"),
      calltype: this.callType
    }
    this.commonSandbox.getChartData(params)
    this.commonSandbox.chartData$.subscribe((data) => {
      if (data && data.length > 0) {
        this.updateFlag = true
        this.chartData = data.map((item => {
          return [+item.called_hour, item.call_count]
        }));
        this.chartOptions.series.forEach((chart) => {
          chart.data = this.chartData
        })
      }
    })
  }
  onDateChange(event) {
    this.dateValue = moment(event.target.valueAsDate).format("YYYY-MM-DD")
    this.fetchCallCount()
    this.fetchFollowupList()
    this.getChartData()
  }
  onSelectChartTypeFunc(event) {
    this.updateFlag = true
    const element = event.target
    this.callType = event.target.value
    this.color = element.getAttribute('data-color');
    this.title = element.getAttribute('data-title');
    this.chartOptions.title.text = this.title
    this.chartOptions.series[0].color = this.color
    this.getChartData()
  }
}
