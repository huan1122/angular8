import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import {Product} from '../../models/product';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product = new Product;
  submitted = false;
  constructor(
    private productService : ProductService,
    private location : Location) { }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; 
    this.productService.saveProduct(this.product).subscribe(() => this.toBack())
  }

  toBack():void {  this.location.back(); }
}
