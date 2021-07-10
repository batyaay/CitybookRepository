import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-hello-page',
  templateUrl: './hello-page.component.html',
  styleUrls: ['./hello-page.component.css']
})
export class HelloPageComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  
  constructor(public userService: UserService) { 
    this.firstName='';
    this.lastName='';
  }

  ngOnInit(): void {
    if(this.userService && this.userService._user){
      this.firstName=this.userService._user.FirstName;
      this.lastName=this.userService._user.LastName;
    }
  }
}
