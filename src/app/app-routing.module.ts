import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { UserLoginComponent } from './components/pages/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/pages/user/user-register/user-register.component';
import { UserVerifyEmailComponent } from './components/pages/user/user-verify-email/user-verify-email.component';



const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
 
  {
    path:'user',

    children:[
    {
      path:'',
      children:[
        
        {path: 'login',component: UserLoginComponent},

        {path: 'register',component: UserRegisterComponent},
  
        {path: 'verify-email',component: UserVerifyEmailComponent}
      ]
    }
     
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
