import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-watch',
  templateUrl: './list-watch.component.html',
  styleUrls: ['./list-watch.component.css']
})
export class ListWatchComponent implements OnInit {

  lesProduits!:Produit[];

  constructor(
    private produitService:ProduitService) { }
    
    ngOnInit(): void {
     this.produitService.getProduits()
     .subscribe (data => this.lesProduits = data);
     }

}
