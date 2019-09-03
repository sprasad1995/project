import { GetemployeeService } from './../../service/getemployee.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // for creating json data to be posted
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr'; // for toastr alert
@Component({
  selector: 'app-senddata',
  templateUrl: './senddata.component.html',
  styleUrls: ['./senddata.component.css']
})
export class SenddataComponent implements OnInit {

  constructor(
    private empService: GetemployeeService,
    private toastr: ToastrService) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      minDate: new Date(1960, 0, 1),
      dateInputFormat: 'DD/MM/YYYY'.toString()
    });
  }
  myform;
  empdata: any;
  jsondata: any;
  id = 0;
  emp: any;
  currentobj: any = {}; // object to receive data submitted to post service.
  data: any;
  file = null;
  datePickerConfig: Partial<BsDatepickerConfig>;
  todayDate = new Date(); // select scurrent date


  ngOnInit() {
    // reactive form validation
    this.myform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      dob: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      age: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      salary: new FormControl('', [Validators.required, Validators.pattern('[0-6]*')]),

    });
  }


  onFileselected(event: any) {
    this.file = event.target.files[0];
    // console.log(this.myform);
    // this.myform.append('file');
  }
  postdata() {
    if (this.myform.invalid) {
      return;
    } else {

      this.jsondata = JSON.stringify(this.myform.value); // it will store the data
      // mydata.append('file');
      const mydata = this.jsondata; // pass the data to a constant
      this.set_emp(mydata); // send data to a method
      // console.log(this.jsondata);
    }
  }
  async set_emp(empdata) {

    console.log(empdata);
    // data will store the return value
    this.data = await this.empService.post('http://dummy.restapiexample.com/api/v1/create', empdata);
    if (!this.data) {
      console.log('Error');
    } else {
      try {
        const url = 'http://dummy.restapiexample.com/api/v1/employee/' + this.data.id;
        this.currentobj = await this.empService.get(url);
        console.log(this.currentobj);

      } catch (error) {
        console.log(error);
      }
      this.toastr.success('Added Sucessfully', 'Employee Added', {
        closeButton: true,
        timeOut: 1500
      });
    }


  }



}

// }
