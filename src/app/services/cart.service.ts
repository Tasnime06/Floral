import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Commande } from '../classes/commande';
import { Produit } from '../classes/produit';
import { ProduitService } from './produit.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cmm:Commande[]=[];

  constructor(private produitService:ProduitService) {
   }

  // add(id:number,q:number){
  //   this.produitService.getProduit(id).subscribe(data => this.items.push(data));
  // }
  add(prd:Produit,q:number){
    let aux=true;
    for (let index = 0; index < this.cmm.length; index++) {
      const element = this.cmm[index];
      if(element.product.libelle==prd.libelle){
        element.quantity+=q;
        aux=false ;
      }
    }
    if(aux)
    this.cmm[this.cmm.length]=new Commande(prd,q);
  }

  remove(lib:string){
    for (let index = 0; index < this.cmm.length; index++) {
      const element = this.cmm[index];
      if(element.product.libelle==lib){
        this.cmm.splice(index,1);
      }
    }

  }

  getcart(){
    return this.cmm;
  }

  gettotal(){
    let aux=0;
    for (let i = 0; i < this.cmm.length; i++) {
      const element = this.cmm[i];
      aux+=element.product.prix*element.quantity;
    }
    return aux;
  }
}
