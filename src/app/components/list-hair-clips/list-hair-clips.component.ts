import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-hair-clips',
  templateUrl: './list-hair-clips.component.html',
  styleUrls: ['./list-hair-clips.component.css']
})
export class ListHairClipsComponent implements OnInit {

  lesProduits!:Produit[];

  constructor(
    private produitService:ProduitService) { }
    
    ngOnInit(): void {
     this.produitService.getProduits()
     .subscribe (data => this.lesProduits = data);
     }

}
