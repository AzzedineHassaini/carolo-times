import { Component } from '@angular/core';
import {DestroyedComponent} from "../../../../components/destroyed.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {loginForm} from "../../forms/login.form";
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends DestroyedComponent {

  loginFormGroup: FormGroup;

  constructor(
    private readonly _authService: AuthService,
    private readonly _fb: FormBuilder,
    private readonly _router: Router
  ) {
    super();
    this.loginFormGroup = this._fb.group({...loginForm});
  }

  onSubmit(){
    this.loginFormGroup.markAllAsTouched();
    if (this.loginFormGroup.invalid){
      return;
    }
    this._authService.login(this.loginFormGroup.value).pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: () => {
        console.log('Logged in');
        this._router.navigate(['/'])
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
