import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/classes/commande';
import { Produit } from 'src/app/classes/produit';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Expense Manager';
   isUserLoggedIn = false;
  _router: any;
  cartitems!:Commande[];
  total!:number;

   constructor(private authService: AuthService,
      private cartservice:CartService ) {
    
   }

   ngOnInit() {
      let storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeData);
      console.log("aa");
      
      console.log(this.cartservice.getcart());
      this.cartitems=this.cartservice.getcart();
      console.log(this.cartitems.length);
      this.total=this.cartservice.gettotal();
      

      if( storeData != null && storeData == "true")
         this.isUserLoggedIn = true;
      else
         this.isUserLoggedIn = false;

         let currentUrl = this._router.url;
         this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
             this._router.navigate([currentUrl]);
             console.log(currentUrl);
         });
   }

}
