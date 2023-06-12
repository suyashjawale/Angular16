import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'category',
        children:[
            {
                path:'',
                redirectTo:'god',
                pathMatch:'full'
            },
            {
                path: 'god',
                data:{categoryName:'god'},
                loadComponent: () => import('./components/category/category.component').then(mod => mod.CategoryComponent),
            },
            {
                path: 'nature',
                data:{categoryName:'nature'},
                loadComponent: () => import('./components/category/category.component').then(mod => mod.CategoryComponent)
            },
            {
                path: 'idols',
                data:{categoryName:'idols'},
                loadComponent: () => import('./components/category/category.component').then(mod => mod.CategoryComponent)
            },
            {
                path: 'modernart',
                data:{categoryName:'modernart'},
                loadComponent: () => import('./components/category/category.component').then(mod => mod.CategoryComponent)
            }
        ]
    },
    {
        path: 'myaccount',
        loadComponent: () => import('./components/profile/profile.component').then(mod => mod.ProfileComponent)
    },
    {
        path: 'mycart',
        loadComponent: () => import('./components/cart/cart.component').then(mod => mod.CartComponent)
    },
    {
        path: 'search',
        loadComponent: () => import('./components/search/search.component').then(mod => mod.SearchComponent)
    },
    {
        path: 'frame/:frameId',
        loadComponent: () => import('./components/product/product.component').then(mod => mod.ProductComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./components/pagenotfound/pagenotfound.component').then(mod => mod.PagenotfoundComponent)
    },
];
