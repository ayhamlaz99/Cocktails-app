import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../4.Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private srv: AuthService, private router: Router) { }

  canActivate(): true | UrlTree {
    if (this.srv.isAuthenticated())
      return true;
    else
      return this.router.parseUrl('/401')
  }
};
