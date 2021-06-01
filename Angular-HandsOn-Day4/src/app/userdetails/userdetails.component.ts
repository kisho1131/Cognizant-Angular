import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userservice:UserService) { }

  id: any | undefined |null;
  userSingle:User | undefined;
  
  ngOnInit(){
      this.id=this.route.snapshot.paramMap.get("id");
      console.log(this.id);
      this.userSingle=this.userservice.getSingleUser(this.id);
      console.log(this.userSingle);
  }

}
