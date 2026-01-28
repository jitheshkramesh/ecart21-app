import { Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page.component';
import { SignInComponent } from './pages/sign-in.component';
import { SignUpComponent } from './pages/sign-up.component';
import { ProductListComponent } from './components/product-list.component';

export const routes: Routes = [
 
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
   {
    path: 'cart-page',
    component: CartPageComponent
  },
  {
    path: '',
    component: CartPageComponent
  },
   { path: '**', redirectTo: '' }
];
