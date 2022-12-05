import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { ExpenseGuard } from 'src/app/guards/expense.guard';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  idProduit !: number;
  prd !:Produit;
  new_prd !:Produit;
  ajout :boolean = true;
  isloggedin:boolean = false;
  
  constructor(private produitService:ProduitService,
    private activatedRoute:ActivatedRoute,
    private guard:ExpenseGuard,
    private router:Router) { }

  
    

  ngOnInit(): void {

    this.isloggedin = this.guard.getState();
    
    this.productForm= new FormGroup({
      libelle:new FormControl(''),
      imagee:new FormControl(''),
      imagee2:new FormControl(''),
      price: new FormControl(10),
      description: new FormControl('description'),
      categorie: new FormControl(),
      stock: new FormControl(true),
      });
  }

  productForm: FormGroup = new FormGroup({
    libelle:new FormControl(''),
    imagee:new FormControl(''),
    imagee2:new FormControl(''),
    price: new FormControl(10),
    description: new FormControl('description'),
    categorie: new FormControl(),
    stock: new FormControl(true),
    });
    

    navige(){
      this.router.navigate(['/product/'+this.prd.id]);
    }
  add(){
    const now = new Date();
      this.new_prd = new Produit(this.productForm.value.libelle,this.productForm.value.categorie,this.productForm.value.price,this.productForm.value.stock,now.toJSON(),this.productForm.value.description,[this.productForm.value.imagee,this.productForm.value.imagee2],[]); 
      this.produitService.addProduit(this.new_prd).subscribe(data =>this.prd = data)
  }

}
