import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalEditComponent } from './personal-edit/personal-edit.component';

const routes: Routes = [
  { path: '', component: PersonalEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
