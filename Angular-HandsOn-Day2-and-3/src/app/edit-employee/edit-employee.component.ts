import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor() { } 
  departments = [

    { id: 1, name: "Payroll" },
    
    { id: 2, name: "Internal" },
    
    { id: 3, name: "HR" }];

    
    employee:Employee={id:1,
      name:"",salary:0,permanent:true,department:this.departments[0],Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]
    };

  ngOnInit(): void {
  }
  formSubmit(data: any){
    console.log(data)

  }

}
