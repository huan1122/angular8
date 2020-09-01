import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../product.service'
import { from } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { faSearch, faBell, faUser,faCircle, faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // listPro = listProduct;
  faEdit = faEdit;
  faTrash = faTrash;
  faCricle = faCircle;
  listPro : Product[];
  selectProduct :Product;
 
  constructor(private productService : ProductService,
    public matDialog : MatDialog) { 
    
  }

  ngOnInit(): void {
    this.getListProduct();
  }
  getListProduct():void{
    this.productService.getListProduct().subscribe(
      (updateProduct) => {
        this.listPro = updateProduct;
      }
    );

  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(Product, dialogConfig);
  }
  
}
