import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-list-bracelet',
  templateUrl: './list-bracelet.component.html',
  styleUrls: ['./list-bracelet.component.css']
})
export class ListBraceletComponent implements OnInit {
  lesProduits!:Produit[];

  constructor(
    private produitService:ProduitService) { }
    
    ngOnInit(): void {
     this.produitService.getProduits()
     .subscribe (data => this.lesProduits = data);
     }
}
