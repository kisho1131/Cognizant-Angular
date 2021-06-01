import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Handson1';
  /*showDetails(details: {avatar:string, email:string, first_name:string, id:number, last_name:string}){
    console.log(details);
    var st=details.last_name +", "+ details.first_name;
    var st1=details.email;
    var d=document.createElement("div");
    //d.setAttribute("class","data")
    var p=document.createElement("p");
    var p1=document.createElement("p")
    p1.textContent=st;
    var br=document.createElement("br");
    p1.appendChild(br);
    //p1.textContent=st1;
    var img=document.createElement("img");
    img.setAttribute("src",details.avatar);
    p.appendChild(img);

    d.appendChild(p);
    d.appendChild(p1);
    var div=document.getElementById("result");
    div?.appendChild(d);
  }
  async getNames(){
    let url="https://reqres.in/api/users";
    let st= await fetch(url);
    let data= await st.json();
    let details=data.data;
    console.log(details);
    for (let i = 0; i < details.length; i++) {
      this.showDetails(details[i]); 
    }
  }*/
  users: User[] | undefined;
  constructor(private userService: UserService) {
  }
  async ngOnInit() {
    let url="https://reqres.in/api/users";
    let st=await fetch(url);
    let data= await st.json();
    let details=data.data;
    console.log(details);
    this.users=details;
    console.log(this.users);
  }
  
}

