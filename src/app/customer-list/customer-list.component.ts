import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Customers} from '../../models/customer';
import {CustomerService} from '../customer.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  private listCus : Customers[];
  constructor(
    private customerService :CustomerService,
    private location : Location) {
   }

  ngOnInit(): void {
  }
  getListCustomer(): void{
    this.customerService.getListCustomer().subscribe((updateProduct) => {
      this.listCus = updateProduct;
    } )
  }
  goback(): void{
    
  }
}
