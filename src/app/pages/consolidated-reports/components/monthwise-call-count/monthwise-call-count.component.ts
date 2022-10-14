import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CommonSandbox } from 'src/app/common/common.sandbox';

@Component({
  selector: 'app-monthwise-call-count',
  templateUrl: './monthwise-call-count.component.html',
  styleUrls: ['./monthwise-call-count.component.scss']
})
export class MonthwiseCallCountComponent implements OnInit, OnDestroy {
  faSearch = faSearch
  year: number
  month: number
  dataArr = [
  ]
  yearArr = []
  monthArr = []
  total: any = {}
  public subscriptions: Array<Subscription> = [];

  constructor(
    public commonSandbox: CommonSandbox,
    private toster: ToastrService,) {
    var max = new Date().getFullYear(),
      min = max - 40,
      max = max;

    for (var i = min; i <= max; i++) {
      this.yearArr.push({ "id": i });
    }
    this.yearArr.reverse()

    this.monthArr = [
      { id: 1, month: 'Jan' },
      { id: 2, month: 'Feb' },
      { id: 3, month: 'Mar' },
      { id: 4, month: 'Apr' },
      { id: 5, month: 'May' },
      { id: 6, month: 'June' },
      { id: 7, month: 'July' },
      { id: 8, month: 'Aug' },
      { id: 9, month: 'Sep' },
      { id: 10, month: 'Oct' },
      { id: 11, month: 'Nov' },
      { id: 12, month: 'Dec' }
    ];
  }

  ngOnInit() {
  }
  onSubmit() {
    if (!this.year || !this.month) return this.toster.error('Please select Year and Month and Search !')
    const params = {
      month_id: this.month,
      year_id: this.year
    }
    this.commonSandbox.monthWiseCall(params)
    this.subscriptions.push(this.commonSandbox.monthwiseCallCount$.subscribe((res) => {
      if (res && res.length > 0) {
        this.dataArr = res
        this.total.incoming_connected_count = this.dataArr.reduce((a, b) => a + b.incoming_connected_count, 0)
        this.total.incoming_missed_count = this.dataArr.reduce((a, b) => a + b.incoming_missed_count, 0)
        this.total.outgoing_connected_count = this.dataArr.reduce((a, b) => a + b.outgoing_connected_count, 0)
        this.total.outgoing_missed_count = this.dataArr.reduce((a, b) => a + b.outgoing_missed_count, 0)
        this.total.barge_in_count = this.dataArr.reduce((a, b) => a + b.barge_in_count, 0)
      }
    }))
  }

  export() {
    console.log('this.year: ', this.year);
    console.log('this.month: ', this.month);
    if (!this.year || !this.month) return this.toster.warning('Please select Year and Month and Export !')
    const params = {
      name: 'montwiseCallCount',
      file: 'MontwiseCallCount.xlsx',
      payload: {
        month_id: this.month,
        year_id: this.year
      }
    }
    this.commonSandbox.export(params)

  }
  ngOnDestroy() {
    this.commonSandbox.clearFunc({})
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
