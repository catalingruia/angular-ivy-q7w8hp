import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navbarOpen = false;

  isAuthenticated$:Observable<boolean>;
  User: User;

  constructor(private authService: AuthService) { 
    this.isAuthenticated$ = authService.isAuthenticated$;
  }

  ngOnInit(): void {
    this.authService.UserData.subscribe(userData => this.User = userData);
  }

  login(){
    this.authService.loginWithGoogle();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
