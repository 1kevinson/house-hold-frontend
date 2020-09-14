import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css'],
})
export class AuthHomeComponent implements OnInit {
  // Accesing the form datas with view Child
  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('signupForm') signupForm: NgForm;

  //Property binding
  emailLoginProperty: string;
  passwordLoginProperty: string;
  userFnProperty: string;
  userLnProperty: string;
  userTypeProperty: string;
  userPasswordProperty: string;
  userPasswordConfirmProperty: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmitLogin() {
    console.log(this.loginForm);
  }

  onCancelLogin() {}

  onSubmitSignup() {
    console.log(this.signupForm);
  }
}
