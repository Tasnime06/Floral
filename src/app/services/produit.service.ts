import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produit } from '../classes/produit';

const URL = 'http://localhost:3000/listpoducts';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
  }
    
  addProduit(p:Produit):Observable<Produit>{
    return this.http.post<Produit>(URL, p);
  }

  getProduit(id:number):Observable<Produit>{
    return this.http.get<Produit>(URL+"/"+id);
  }

  updateProduit(id:number, p:Produit):Observable<Produit>{
    return this.http.put<Produit>(URL+"/"+ id, p);
  }
    
  deleteProduit(id:number){
    return this.http.delete(URL+"/"+id);
  }
}
