import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category.component';
import { SubCategoryComponent } from './components/sub-category.component';
import { DetailsComponent } from './components/details.component'

const appRoutes = [
    {
        path: 'Home',
        component: CategoryComponent,
    },
    {
        path: 'Category',
        component: CategoryComponent,
    },
    {
        path: 'SubCategory/:catName',
        component: SubCategoryComponent,
    },
    {
        path: 'Detail/:catName/:itemId',
        component: DetailsComponent,
    },
    {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: CategoryComponent,
    }
];

@NgModule({
    declarations: [

    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: []
  })
  export class RoutingModule { }
