import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactformComponent } from './contactform/contactform.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TablesComponent } from './tables/tables.component';
import { RegisterUserComponent } from './register/register.component';
import { UserloginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExploreComponent } from './explore/explore.component';
import { LoginuserService } from './loginuser.service';
import { AuthInterceptorService } from './auth-interceptor-service';
import { AuthGuard } from './auth/auth.guard';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    AboutComponent,
    ContactformComponent,
    LandingpageComponent,
    TablesComponent,
    RegisterUserComponent,
    UserloginComponent,
    ExploreComponent,
    
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  
  ],
  providers: [LoginuserService ,AuthGuard,
    {
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptorService,
     multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
