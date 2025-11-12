import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  public type: string = 'password';
  public username: string = '';
  public password: string = '';
  public isLoading: boolean = false;
  public errors: any = {};

  ngOnInit(): void {

  }

  public login() {

  }

  public showPassword() {

  }

  public registrar() {
  }
}
