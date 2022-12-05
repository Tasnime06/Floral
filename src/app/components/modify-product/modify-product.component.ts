import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { ExpenseGuard } from 'src/app/guards/expense.guard';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  idProduit !: number;
  prd !:Produit;
  auxprd !:Produit;
  new_prd !:Produit;
  ajout :boolean = true;
  isloggedin:boolean = false;
  

  constructor(private produitService:ProduitService,
    private activatedRoute:ActivatedRoute,
    private guard:ExpenseGuard,
    private router:Router) { }

  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.params['id'];

    this.produitService.getProduit(this.idProduit).subscribe(data => this.auxprd=data);


    this.produitService.getProduit(this.idProduit).subscribe(data => this.productForm=new FormGroup({
      libelle:new FormControl(data.libelle),
      price: new FormControl(data.prix),
      description: new FormControl(data.description),
      categorie: new FormControl(data.categorie),
      Stock: new FormControl(data.enStock),
      }));

    this.isloggedin = this.guard.getState();
  }

  navige(){
    this.router.navigate(['/product/'+this.prd.id]);
  }

    productForm: FormGroup = new FormGroup({
      libelle:new FormControl('lib'),
      imagee:new FormControl(''),
      imagee2:new FormControl(''),
      price: new FormControl(10),
      description: new FormControl('description'),
      categorie: new FormControl('categorie'),
      Stock: new FormControl(true),
      });
  
  add(){
    const now = new Date();
      this.new_prd = new Produit(this.productForm.value.libelle,this.productForm.value.categorie,this.productForm.value.price,this.productForm.value.Stock,now.toJSON(),this.productForm.value.description,this.auxprd.images,this.auxprd.comments);
      this.produitService.updateProduit(this.idProduit,this.new_prd).subscribe(data =>this.prd = data)
  }

}
