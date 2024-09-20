import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { SharedService } from './shared.service';
import { HttpClientModule,provideHttpClient,withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WidgetsComponent,
    HomeComponent,
    FeedComponent
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
