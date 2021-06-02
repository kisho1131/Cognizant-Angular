import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  employee:Employee[]=[{id:1,
    name:"Sumit Kumar",salary:80000,permanent:true,department:{id:1845,name:"BackEnd"},Skills:[{id:1894,name:"Python"},{id:2,name:"Django"},{id:3,name:"Angular"}]},{id:2,
      name:"Prabhat Sinha",salary:12000,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:3,
        name:"Harsh Prasad",salary:13000,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:4,
          name:"Emma Watson",salary:14000,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:5,
            name:"Andrew Cook",salary:15000,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]}]
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
