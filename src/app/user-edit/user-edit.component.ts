import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserServiceService} from '../user-service.service';
import {Location} from '@angular/common';
import { of } from 'rxjs';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user = new User;
  submitted  = false;
  constructor(
    private userService :UserServiceService,
    private location : Location
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true; 
    console.log(`${JSON.stringify(this.user)}`);
    this.userService.saveUser(this.user).subscribe(() => this.toBack());
  }
  toBack():void {  this.location.back(); }
}
