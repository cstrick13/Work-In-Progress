import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { HttpClientModule,provideHttpClient,withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import {getAuth} from 'firebase/auth';
import {initializeApp, getApps} from 'firebase/app';
import { environment } from './environments/enironment.development';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WidgetsComponent,
    HomeComponent,
    FeedComponent,
    SplashscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ SharedService,
    provideHttpClient(withFetch()),
    provideClientHydration(),],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    if(!getApps().length){
      initializeApp(environment.firebaseConfig);
      console.log('Yay')
    }else{
      console.log('Nayy')
    }

    const auth = getAuth();
    
    if (auth) {
      console.log('Firebase Auth initialized:', auth);
    } else {
      console.log('Failed to initialize Firebase Auth.');
    }
  }
}
