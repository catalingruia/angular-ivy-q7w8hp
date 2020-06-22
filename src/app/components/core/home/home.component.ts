import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { map } from 'rxjs/operators';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { User } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fire:TestService) { }

  test: app.models.Test;

User: User;
  ngOnInit(): void {
  this.User = JSON.parse(localStorage.getItem('user'));
    // this.fire.getTest('-MA2x-WlxdIxY92TgxXL').valueChanges().subscribe(data =>{
    //   this.test = data;
    //   console.log(this.test);
    // });

    
  }
  getOne(){
    

  }

}
