import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  employee:Employee[]=[{id:1,
    name:"Ryuzaki",salary:10000,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:2,
      name:"test",salary:12000,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:3,
        name:"test2",salary:13000,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:4,
          name:"test3",salary:14000,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:5,
            name:"test4",salary:15000,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]}]
  constructor() { }
  public getEmployees(){
    return this.employee;
  }
  public searchEmployee(data:string){
    for(let emp of this.employee){
      if(emp.name.startsWith(data)){
        return emp;
      }
    }
    return null;
  }
}
