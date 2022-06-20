import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactformComponent } from './contactform/contactform.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TablesComponent } from './tables/tables.component';
import { RegisterUserComponent } from './register/register.component';
import { UserloginComponent } from './login/login.component';
import { ExploreComponent } from './explore/explore.component';
import { AuthGuard } from './auth/auth.guard';
import { DistanceComponent } from './distance/distance.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  {path: 'home',component:HomeComponent},
  { path: 'search/:searchTerm', component: HomeComponent},
  { path: 'tag/:tag', component: HomeComponent },
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'about',component:AboutComponent},
  {path: 'contactform', component:ContactformComponent},
  {path: 'registeruser', component:RegisterUserComponent},
  {path: 'userlogin', component:UserloginComponent},
  {path: 'tables',component:TablesComponent},
  {path: 'explore',component:ExploreComponent},
  {path: 'distance',component:DistanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
