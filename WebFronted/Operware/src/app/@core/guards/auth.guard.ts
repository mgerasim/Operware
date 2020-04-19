import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {isNull} from "util";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const authToken = localStorage.getItem('authToken');
      const length = authToken?.toString().length || 0;
      console.log(`length: ${length}`);
      if (length > 0) {
        return true;
      }
      this.router.navigate(['auth']).then();
      return false;
  }

}
