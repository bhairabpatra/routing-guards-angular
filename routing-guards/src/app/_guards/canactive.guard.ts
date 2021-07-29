import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../_auth/service.service';
import { RouterModule, Routes, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CanactiveGuard implements CanActivate {

  constructor(private authservice:ServiceService , private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authservice.isLoggedIn()) {
        return true;
      } else {
         this.router.navigateByUrl('/login')
        return false;
      }
  }

}
