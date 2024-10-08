import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondChild1Component } from './second-child1.component';

const routes: Routes = [
  {
    path: '',
    component: SecondChild1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondChild1RoutingModule { }
