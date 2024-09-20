import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';


const routes: Routes = [
  { path: 'splash', component: SplashscreenComponent},
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
