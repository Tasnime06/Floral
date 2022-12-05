import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

   constructor(private authService: AuthService, private router: Router) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;

          return this.checkLogin(url);
      }

      checkLogin(url: string): true | UrlTree {
         console.log("Url: " + url)
         let val: string|null = localStorage.getItem('isUserLoggedIn');

         if(val != null && val == "true"){
            if(url == "/login")
               this.router.parseUrl('/expenses');
            else 
               return true;
         } else {
            return this.router.parseUrl('/login');
         }
         return true;
      }

      getState():boolean{
         let val: string|null = localStorage.getItem('isUserLoggedIn');
         if(val != null && val == "true"){
            return true;
         } else {
            return false;
         }
         return true;
      }
}