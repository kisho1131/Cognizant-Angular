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

    { id: 1, name: "UI/UX Department" },
    
    { id: 2, name: "Backend Development" },
    
    { id: 3, name: "Human Resource" }];

    
    employee:Employee={id:1,
      name:"Sumit Kumar",salary:0,permanent:true,department:this.departments[0],Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]
    };

  ngOnInit(): void {
  }
  formSubmit(data: any){
    console.log(data)

  }

}
