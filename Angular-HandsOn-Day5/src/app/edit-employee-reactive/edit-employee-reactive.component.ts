import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'
import{Employee} from '../employee'
@Component({
  selector: 'app-edit-employee-reactive',
  templateUrl: './edit-employee-reactive.component.html',
  styleUrls: ['./edit-employee-reactive.component.css']
})
export class EditEmployeeReactiveComponent implements OnInit {
  employee:Employee={id:1,name:"ryuzaki",salary:10000,department:{id:1,name:"CDE"},permanent:true,Skills:[{id:1,name:"HTML"},{id:2,name:"JAVA "}]};
  public departments=[{id:1,name:'payroll'},{id:2,name:'Development'},{id:3,name:"HR"}]
  
  employeeForm=this.fb.group({id:['',Validators.required],name:['',Validators.required],salary:[],permanent:[true],department:[''],
  Skills:this.fb.array([this.createSkillFormGroup()])
  });
get Skills(){
  return this.employeeForm.get('Skills') as FormArray;
}

  constructor(private fb: FormBuilder) { }

  private createSkillFormGroup(): FormGroup{
    return new FormGroup({'id':new FormControl(''),'name':new FormControl('')})
  }

  public addSkill(){
    this.Skills.push(this.createSkillFormGroup());
  }

  ngOnInit(): void {
  }
  getControls(){
    return (this.employeeForm.get('Skills') as FormArray).controls;
  }
  onSubmit(){
    console.log(this.employeeForm.value)
  }
}
