import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAnimalComponent } from './component/add-animal/add-animal.component';
import { DisplayAnimalComponent } from './component/display-animal/display-animal.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'animals', pathMatch: 'full'
  },
  {
    path: 'animals', component: DisplayAnimalComponent
  },
  {
    path: 'addanimal', component: AddAnimalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
