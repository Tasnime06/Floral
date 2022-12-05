import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/classes/commande';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartitems!:Commande[];
  total!:number;

  constructor(private cartservice:CartService) {
   }

  ngOnInit(): void {
    this.cartitems=this.cartservice.getcart();
      this.total=this.cartservice.gettotal();
      
  }

  delete(id:string){
    this.cartservice.remove(id);
    this.cartitems=this.cartservice.getcart();
    this.total=this.cartservice.gettotal();
  }
}
