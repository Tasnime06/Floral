import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-neckless',
  templateUrl: './list-neckless.component.html',
  styleUrls: ['./list-neckless.component.css']
})
export class ListNecklessComponent implements OnInit {

  lesProduits!:Produit[];

  constructor(
    private produitService:ProduitService) { }
    
    ngOnInit(): void {
     this.produitService.getProduits()
     .subscribe (data => this.lesProduits = data);
     }


}
