import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User[] | undefined;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user=this.userService.getUser();
    console.log(this.user)
  }

}
