import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { DidSandbox } from '../../did.sandbox';
@Component({
  selector: 'app-add-did',
  templateUrl: './add-did.component.html',
  styleUrls: ['./add-did.component.scss']
})
export class AddDidComponent implements OnInit {
  orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id;
  faSearch = faSearch
  didArr = [
    { did_number: '', inValid: false },
  ]
  constructor(
    public didSandbox: DidSandbox,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  onSaveBtnClick() {
    let isValid = true
    this.didArr.forEach((did) => {
      did.inValid = false
      if (did.did_number == '' || did.did_number.toString().length < 8) {
        did.inValid = true
        this.toastr.error('Enter Valid DID')
        isValid = false
        return
      }
    })
    if (isValid) {
      const params = {
        did_number_array: this.didArr,
        organisation_id: this.orgId
      }
      this.didSandbox.addDid(params)
    }

  }
  onCancelBtnClick() {
    this.didArr.forEach((did) => did.did_number = '')
  }
  onAdd() {
    this.didArr.push({ did_number: '', inValid: false })
  }
  onRemove() {
    this.didArr.pop()
  }
  onInputChange(did) {
    if (did.did_number.length === 8) {
      did.inValid = false
      return
    }
    did.inValid = true
  }

}
