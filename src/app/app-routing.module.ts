import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { LoginComponent } from './Component/login/login.component';
import { PlaceOrderComponent } from './Component/place-order/place-order.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"homepage",component:HomePageComponent},
  {path:"cart",component:CartComponent},
  {path:"placeOrder/:orderId",component:PlaceOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
