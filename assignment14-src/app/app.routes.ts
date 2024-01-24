import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ErrorCompComponent } from './error-comp/error-comp.component';


export const routes: Routes = [

    {path:"", component: TechnologiesComponent},

    {path :"Books" , component: BooksComponent},
    {path :"Technologies", component: TechnologiesComponent},

    {path : "**", component :ErrorCompComponent }

];
