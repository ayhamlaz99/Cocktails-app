import { Component } from '@angular/core';
import { AuthService } from '../4.Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  loggedIn!: boolean;
  text: string = '';

  constructor(private srv: AuthService) { }

  ngOnInit(): void {
    this.loggedIn = this.srv.isAuthenticated();
  }

  logging() {
    if (this.loggedIn) this.srv.logOut();
    else this.srv.logIn();
    this.loggedIn = this.srv.isAuthenticated();
  }
}
