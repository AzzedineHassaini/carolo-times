import {Validators} from "@angular/forms";

export const registerForm = {
  username: [null, [Validators.required]],
  email: [null, [Validators.required, Validators.email]],
  password: [null, [Validators.required, Validators.minLength(5)]]
}
