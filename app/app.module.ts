import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ArithmaticService } from './arithmatic.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NumberService } from './number.service';
import { StringService } from './string.service';
import { ChildComponent } from './child/child.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Child1Component,
    Child2Component,
    ChildComponent,
    TechnologiesComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArithmaticService,NumberService,StringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
