import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../4.Services/auth.service';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  if (inject(AuthService).isAuthenticated())
    return true;
  else
    return inject(Router).parseUrl('/401');
};
