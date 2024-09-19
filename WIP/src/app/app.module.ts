import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { SharedService } from './shared.service';
import { HttpClientModule,provideHttpClient,withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ SharedService,
    provideHttpClient(withFetch()),
    provideClientHydration(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
