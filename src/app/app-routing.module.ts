import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';

const routes: Routes = [
  { path: '', component: PizzaListComponent },
  { path: 'pizzas/:id', component: PizzaDetailComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
