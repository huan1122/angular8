import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  listUser= [];
  constructor(
    private userService : UserServiceService
  ) { }

  ngOnInit(): void {
    this.getListUser();
  }
  getListUser() :void {
    this.userService.getListUser().subscribe(list => this.listUser =list);
  }
}
