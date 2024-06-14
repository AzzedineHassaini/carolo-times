import {Validators} from "@angular/forms";

export const loginForm = {
  email: [null, [Validators.required, Validators.email]],
  password: [null, [Validators.required]],
}
