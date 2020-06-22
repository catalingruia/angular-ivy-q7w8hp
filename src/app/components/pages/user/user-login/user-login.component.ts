import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  username:string = '';
  password:string = '';

  user:boolean = false;
  ngOnInit(): void {
    this.user = this.auth.isLoggedIn
  }


  login(){
    this.auth.login(this.username,this.password);
  }

  loginWithGoogle(){
    this.auth.loginWithGoogle();
  }

  logout(){
    this.auth.logout();
  }
}
