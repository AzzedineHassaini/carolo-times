import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../../features/auth/services/auth.service";
import {inject} from "@angular/core";

export const isAuthenticatedGuard: CanActivateFn = () => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (!authService.currentUser){
    router.navigate(['/']);
  }
  return !!authService.currentUser;
  // "!!" Pour un "cast rapide" en booleen,
  // !currentuser renvoit vrai si il est undefined, si on veut un booleen disant qu'il n'est pas undefined, il faut doublet le not

};
