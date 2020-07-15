import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { map } from 'rxjs/operators';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { User } from 'firebase';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuthenticated$:Observable<boolean>;
  constructor(private fire: TestService,private authService: AuthService ) { 
    this.isAuthenticated$ = authService.isAuthenticated$;
    
  }

  test: app.models.Test[];

  User: User;
  ngOnInit(): void {
    this.User = JSON.parse(localStorage.getItem('user'));
    this.authService.UserData.subscribe(userData => this.User = userData);

    this.fire.getAll().valueChanges().subscribe(result => this.test = result);
  }

  login(){
    this.authService.loginWithGoogle();
  }

  logout(){
    this.authService.logout();
  }
}