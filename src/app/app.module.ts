import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { HomeComponent } from './home/home.component';

// Importacion de clases para el inicio de session con las redes sociales
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { LoginComponent } from './login/login.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("295956537744-vo03s8f02mtn42nv37g2vubjqmlfrqi5.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);

 export function provideConfig() {
   return config;
 }


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [{
                    provide: HTTP_INTERCEPTORS,
                    useClass: InterceptorService,
                    multi: true
                  },
   {
     provide: AuthServiceConfig,
     useFactory: provideConfig
   }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
