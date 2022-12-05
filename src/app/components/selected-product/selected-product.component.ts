import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Comments } from 'src/app/classes/comments';
import { Produit } from 'src/app/classes/produit';
import { ExpenseGuard } from 'src/app/guards/expense.guard';
import { CartService } from 'src/app/services/cart.service';
import { ProduitService } from 'src/app/services/produit.service';
@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent implements OnInit {

  idProduit !: number;
  prd !:Produit;
  ajout :boolean = true;
  isloggedin:boolean = false;
  aux!:string;
  num:number=1;
  
  commentForm: FormGroup = new FormGroup({
    note:new FormControl(2),
    name: new FormControl(),
    comment: new FormControl(),
    });


  constructor(private produitService:ProduitService,
    private activatedRoute:ActivatedRoute,
    private guard:ExpenseGuard,
    private rout:Router,
    private cartservice:CartService) { }

  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.params['id'];

    this.produitService.getProduit(this.idProduit).subscribe(data => this.prd=data);

    this.isloggedin = this.guard.getState();


  }


  addtocart(){
    this.cartservice.add(this.prd,this.num);
  }

  augnum(){
    this.num++;
  }

  dimnum(){
    if(this.num>1)
    this.num--;
  }

  add(){
    
      this.prd.comments.push(new Comments(this.commentForm.value.name,this.commentForm.value.comment,this.commentForm.value.note));
      this.produitService.updateProduit(this.idProduit,this.prd).subscribe(data =>this.prd = data)
      this.commentForm=new FormGroup({
        note:new FormControl(2),
        name: new FormControl(),
        comment: new FormControl(),
        });
  }

  supprimerComment(name : string){
    this.prd.comments=this.prd.comments.filter(cmm =>cmm.name!=name);
    this.produitService.updateProduit(this.idProduit,this.prd).subscribe(data =>this.prd = data);
  }

  supprimerProduit(prd : Produit){
    this.aux = prd.categorie;
    if(prd.id){
      this.produitService.deleteProduit(prd.id).subscribe();
      this.rout.navigate(['/'+this.aux]);
    }
  }
}
