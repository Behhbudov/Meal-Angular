import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedFoodComponent } from './components/featured-food/featured-food.component';
import { SocialFeedComponent } from './components/social-feed/social-feed.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ProductsComponent } from './components/products/products.component';
import { MenuComponent } from './components/menu/menu.component';
import { OtherServicesComponent } from './components/other-services/other-services.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FeaturedFoodComponent,
    SocialFeedComponent,
    ChefsComponent,
    ProductsComponent,
    MenuComponent,
    OtherServicesComponent,
    ReservationComponent,
    GetInTouchComponent,
    FooterComponent,
    CustomerReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
