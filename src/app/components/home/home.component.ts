import { GetemployeeService } from './../../service/getemployee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emp: any;
  p = 1;
  term: any;
  constructor(private empService: GetemployeeService) { }
  // asyncronosly fetch all dat by the mehthod
  async ngOnInit() {
    this.get_Emp();
  }
  async get_Emp() {
    try {
      const data = await this.empService.get('http://dummy.restapiexample.com/api/v1/employees');
      if ( data ) {
        this.emp = data ;
        // console.log(this.emp);
      } else {
        console.log('No data');
      }

    } catch (error) {
      console.log(error);
    }

  }
}
