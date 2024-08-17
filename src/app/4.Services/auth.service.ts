import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated: boolean = false;

  constructor() { }

  logIn() {
    this.authenticated = true;
  }

  logOut() {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}