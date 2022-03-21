import { AuthService } from './../../core/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if(!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode) {
      // ...
    } else {
      this._authService.signUp(email, password).subscribe(resData => {
        console.log(resData);
      }, error => {
        console.log(error);
      });
    }

    form.reset();
  }

}
