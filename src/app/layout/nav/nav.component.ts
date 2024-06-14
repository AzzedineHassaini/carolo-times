import { Component } from '@angular/core';
import {Link} from "../../core/models/link";
import {AuthService} from "../../features/auth/services/auth.service";
import {DestroyedComponent} from "../../components/destroyed.component";
import {TokenModel} from "../../features/auth/models/token.model";

const anonymousNav : Link[] = [
  {title: 'Carolo Times', url: '/'},
  {title: 'Register', url: '/auth/register'},
  {title: 'Login', url: '/auth/login'},
];

const authenticatedNav : Link[] = [
  {title: 'Carolo Times', url: '/'},
];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent extends DestroyedComponent{

  links!: Link[];
  currentUser: TokenModel|undefined;

  constructor(
    private readonly _authService: AuthService
  ) {
    super();
    _authService.currentUser$.subscribe(
      (datas) => {
        this.currentUser = datas;
        this.links = !datas ? anonymousNav : authenticatedNav;
      }
    );
  }

  logout(){
    this._authService.logout();
  }

}
