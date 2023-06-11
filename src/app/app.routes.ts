import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { CartComponent } from './components/cart/cart.component';


export const routes: Routes = [
    {
        path:'home',
        // component:HomeComponent,
        loadComponent: () => import('./components/home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path:'cart',
        // component:CartComponent
        loadComponent: () => import('./components/cart/cart.component').then(mod => mod.CartComponent)
    }
];
