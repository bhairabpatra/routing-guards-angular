import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../_auth/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthChildrenGuardGuard implements CanActivateChild  {

  constructor(private authservice:ServiceService){}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.authservice.isChild()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      return false;
    }


  }
}
