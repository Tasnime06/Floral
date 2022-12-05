import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  lesProduits!:Produit[];
  aux_lib!:string;
  aux_prxmax!:number;
  aux_prxmin!:number;
  aux_cat!:string;
  aux:boolean=false;
  aux2:boolean=false;

  constructor(
    private produitService:ProduitService) { }
    
    ngOnInit(): void {
     this.produitService.getProduits()
     .subscribe (data => this.lesProduits = data);
     }

     productForm: FormGroup = new FormGroup({
      libelle:new FormControl(''),
      pricemin: new FormControl(5),
      pricemax: new FormControl(20),
      categorie: new FormControl('all'),
      });


      research(){
        this.aux=true;
        this.aux_lib=this.productForm.value.libelle;
        this.aux_prxmax=this.productForm.value.pricemax;
        this.aux_prxmin=this.productForm.value.pricemin;
        this.aux_cat=this.productForm.value.categorie;
      }

      add(){
        this.aux2=true;
      }
      reaux(){
        this.aux2=false;
      }
      fnnn(){
        alert(this.aux_cat);
      }
}
