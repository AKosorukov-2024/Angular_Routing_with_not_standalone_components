import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SecondChild1Component } from './second-child1/second-child1.component';
import { SecondChild2Component } from './second-child2/second-child2.component';

@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    SecondChild1Component,
    SecondChild2Component
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
