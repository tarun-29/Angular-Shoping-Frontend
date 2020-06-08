import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { ProductModelServer, serverResponse } from '../../models/product.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: ProductModelServer[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: serverResponse) => {
      this.products = prods.products;
    });
  }
  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }

  AddToCart(id: number) {
    console.log("Button clicke")
    this.cartService.AddProductToCart(id);
  }
}
