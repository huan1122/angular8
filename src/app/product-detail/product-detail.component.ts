import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/models/product';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product:Product;
  constructor(
    private router: ActivatedRoute,
    private productService : ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProductDetail();
  }
  getProductDetail() :void{
    const id = +this.router.snapshot.paramMap.get('id');
    console.log("id :"+id);
    this.productService.getProductDetail(id).subscribe(product =>this.product = product);
  }
  save(): void{
     this.productService.updateProduct(this.product).subscribe(() => this.goBack());
  }
  goBack() : void {
    this.location.back();
  }
}
