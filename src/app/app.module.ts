import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HomeComponent } from './components/core/home/home.component';
import { TestService } from './services/test.service';
import { UserLoginComponent } from './components/pages/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/pages/user/user-register/user-register.component';
import { UserVerifyEmailComponent } from './components/pages/user/user-verify-email/user-verify-email.component';
import { MenuComponent } from './components/core/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserVerifyEmailComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
