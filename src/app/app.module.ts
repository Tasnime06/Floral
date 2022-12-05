import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductsComponent } from './components/products/products.component';
import { ListWatchComponent } from './components/list-watch/list-watch.component';
import { ListEaringsComponent } from './components/list-earings/list-earings.component';
import { ListNecklessComponent } from './components/list-neckless/list-neckless.component';
import { ListRingsComponent } from './components/list-rings/list-rings.component';
import { ListBraceletComponent } from './components/list-bracelet/list-bracelet.component';
import { ListHairClipsComponent } from './components/list-hair-clips/list-hair-clips.component';
import { StarPipe } from './pipes/star.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CartComponent } from './components/cart/cart.component';
import { SearchProductComponent } from './components/search-product/search-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductsComponent,
    ListWatchComponent,
    ListEaringsComponent,
    ListNecklessComponent,
    ListRingsComponent,
    ListBraceletComponent,
    ListHairClipsComponent,
    StarPipe,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SelectedProductComponent,
    LoginComponent,
    LogoutComponent,
    ModifyProductComponent,
    AddProductComponent,
    CartComponent,
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
