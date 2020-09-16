import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { isArray } from 'util';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css'],
})
export class AuthHomeComponent implements OnInit {
  // Accesing the form datas with view Child
  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('signupForm') signupForm: NgForm;

  errorPassword: boolean;
  loginOk: boolean = true;
  loginErrorMessage: string;
  signupOK: boolean;

  userLogin = {
    email: '',
    password: '',
  };

  userSignup = {
    firstname: '',
    lastname: '',
    email: '',
    role: '',
    password: '',
    passwordConfirm: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitLogin() {
    this.userLogin.email = this.loginForm.value.loginEmail;
    this.userLogin.password = this.loginForm.value.loginPassword;
    this.authService.onLoginUser(this.userLogin).then((resp: any) => {
      if (resp.data.length === 1) {
        this.loginOk = true;
        this.authService.login();
        this.router
          .navigate(['/app/home'])
          .then(() => console.log('logged In !'));
      } else {
        this.loginOk = false;
        this.loginErrorMessage = 'Identifiants incorrects';
      }
    });
  }

  onCancelLogin() {
    this.loginForm.reset();
  }

  onSubmitSignup() {
    this.userSignup.firstname = this.signupForm.value.userFirstname;
    this.userSignup.lastname = this.signupForm.value.userLastname;
    this.userSignup.email = this.signupForm.value.userEmail;
    this.userSignup.role = this.signupForm.value.userRole;
    this.userSignup.password = this.signupForm.value.userPassword;
    this.userSignup.passwordConfirm = this.signupForm.value.userPasswordConfirm;

    this.errorPassword =
      this.userSignup.password !== this.userSignup.passwordConfirm;

    if (this.errorPassword) {
      return;
    }

    this.authService.onSignupUser(this.userSignup).then((res) => {
      this.signupOK = res === 'Saved';
    });
  }

  onCancelSignup() {
    this.signupForm.reset();
  }
}
