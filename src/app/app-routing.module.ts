import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummerComponent } from './summer/summer.component';
import { WinterComponent } from './winter/winter.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { CabinInfoComponent } from './cabin-info/cabin-info.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {path:"summer-component", component:SummerComponent},
  {path:"winter-component", component:WinterComponent},
  {path:"cart-component", component:CartComponent},
  {path:"about-component", component:AboutComponent},
  {path:"cabin-info-component", component:CabinInfoComponent},
  {path:"booking-component", component:BookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
