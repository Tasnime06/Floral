import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  aux :number=0;

  lesProduits!:Produit[];

  constructor(
    private produitService:ProduitService) { }
    
    ngOnInit(): void {
     this.produitService.getProduits()
     .subscribe (data => this.lesProduits = data);
     }
     
     add(){
      this.aux++;
    }
    reaux(){
      this.aux=0;
    }
}
