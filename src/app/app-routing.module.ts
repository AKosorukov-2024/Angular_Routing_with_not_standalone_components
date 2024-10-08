import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard } from './guard';

const routes: Routes = [
  { path:  'FirstComponent', canActivate:[Guard],
    loadChildren: () => import('./first/first.module').then(m => m.FirstModule)
  },
  { path: 'SecondComponent',  outlet: "Second",
    loadChildren: () => import('./second/second.module').then(m => m.SecondModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
