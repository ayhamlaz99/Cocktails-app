import { Injectable } from '@angular/core';
import { CanDeactivate, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class leaveGuard implements CanDeactivate<unknown> {

  canDeactivate(): boolean {
    let response = confirm('Are you sure you want to leave!');
    if (response == true) {
      return true;
    } else {
      return false;
    }
  }
}
