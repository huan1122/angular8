import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public productSerive : ProductService) { }
  listPro :Product[] = [];
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct():void{
    this.productSerive.getListProduct().subscribe(product => this.listPro = product.slice(1,3));
  }

}
