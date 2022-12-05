import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { ListBraceletComponent } from './components/list-bracelet/list-bracelet.component';
import { ListEaringsComponent } from './components/list-earings/list-earings.component';
import { ListHairClipsComponent } from './components/list-hair-clips/list-hair-clips.component';
import { ListNecklessComponent } from './components/list-neckless/list-neckless.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListRingsComponent } from './components/list-rings/list-rings.component';
import { ListWatchComponent } from './components/list-watch/list-watch.component';
import { LoginComponent } from './components/login/login.component';
import {SearchProductComponent} from './components/search-product/search-product.component'
import { LogoutComponent } from './components/logout/logout.component';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';
import { ExpenseGuard } from './guards/expense.guard';

const routes:Routes =[
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent },
  {path:'home',title:'Home', component:ListProductsComponent},
  {path:'watch',title:'Watch', component:ListWatchComponent},
  {path:'earings',title:'Earings', component:ListEaringsComponent},
  {path:'neckless',title:'Neckless', component:ListNecklessComponent},
  {path:'rings',title:'Rings', component:ListRingsComponent},
  {path:'bracelet',title:'Bracelet', component:ListBraceletComponent},
  {path:'hairClips',title:'HairClips', component:ListHairClipsComponent},
  {path:'cart',title:'Cart', component:CartComponent},
  {path:'search',title:'Search', component:SearchProductComponent},
  {path:'product/:id',title:'Selected Product', component:SelectedProductComponent},
  {path:'addproduct',title:'Add Product', component:AddProductComponent,canActivate: [ExpenseGuard]},
  {path:'modifyproduct/:id',title:'Selected Product', component:ModifyProductComponent,canActivate: [ExpenseGuard]},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', title:'Erreur',redirectTo:'home'}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
