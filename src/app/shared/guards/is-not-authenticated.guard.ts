import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../../features/auth/services/auth.service";
import {inject} from "@angular/core";

export const isNotAuthenticatedGuard: CanActivateFn = () => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (authService.currentUser) {
    router.navigate(['/']);
  }
  return !authService.currentUser;

};
