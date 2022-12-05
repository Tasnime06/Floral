import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() prd !: Produit;
  aux!:string;

  constructor() { }

    ngOnInit(): void {
      this.aux=this.prd.images[0];
     }

    changer(){
      if(this.aux==this.prd.images[0])
      this.aux=this.prd.images[1];
      else
      this.aux=this.prd.images[0];
    }
    
}
