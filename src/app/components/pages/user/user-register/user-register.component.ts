import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  username:string;
  password:string;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  register(){
    this.auth.register(this.username,this.password);
  }

}
