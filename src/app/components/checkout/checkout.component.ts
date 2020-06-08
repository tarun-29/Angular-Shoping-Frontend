import { CartModelServer } from 'src/app/models/cart.model';
import { CartService } from 'src/app/service/cart.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartTotal : number
  cartData: CartModelServer

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router : Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.cartService.cartData$.subscribe(data=>this.cartData=data)
    this.cartService.cartTotal$.subscribe(total=>this.cartTotal = total)
  }

  //hardcoded user id as an input 2
  onCheckout(){
    this.spinner.show().then(p=>{
      this.cartService.CheckOutFromCart(2);
    })
  }

}
