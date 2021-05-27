import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayAnimalComponent } from './component/display-animal/display-animal.component';
import { AddAnimalComponent } from './component/add-animal/add-animal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterAnimalComponent } from './component/filter-animal/filter-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAnimalComponent,
    AddAnimalComponent,
    FilterAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
