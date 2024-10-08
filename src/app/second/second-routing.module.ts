import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second.component';
import { SecondChild2Component } from '../second-child2/second-child2.component';

const routes: Routes = [
  {
    path: '',
    component: SecondComponent,
    children: [
      {
        path: 'child1',
        loadChildren: () => import('../second-child1/second-child1.module').then(m => m.SecondChild1Module)
      },
      {
        path: 'child2', component: SecondChild2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
