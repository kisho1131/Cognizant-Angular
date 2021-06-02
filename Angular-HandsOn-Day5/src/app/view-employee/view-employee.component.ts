import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common'
import {Employee} from '../employee'

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employee:Employee;
  dateOfBirth:any;
  constructor() { 
    
    this.employee={id:905086,
      name:"Sumit Kumar",salary:500000,permanent:false,department:{id:854321,name:"UI/UX"},Skills:[{id:1,name:"Angular"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]
    };
    const datepipe:DatePipe=new DatePipe('en-US');
    this.dateOfBirth=datepipe.transform(new Date('01/31/198'),'MM-dd-YYYY');
  }

  ngOnInit(): void {
  }

}
