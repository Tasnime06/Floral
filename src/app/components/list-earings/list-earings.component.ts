import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-earings',
  templateUrl: './list-earings.component.html',
  styleUrls: ['./list-earings.component.css']
})
export class ListEaringsComponent implements OnInit {

  lesProduits!:Produit[];

  constructor(
    private produitService:ProduitService) { }
    
    ngOnInit(): void {
     this.produitService.getProduits()
     .subscribe (data => this.lesProduits = data);
     }
}
