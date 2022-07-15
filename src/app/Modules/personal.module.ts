import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalEditComponent } from '../personal-edit/personal-edit.component';
import { PersonelListComponent } from '../personel-list/personel-list.component';
import { DxButtonModule, DxTextBoxModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PersonalEditComponent,
    PersonelListComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    DxButtonModule,
    DxTextBoxModule,
    HttpClientModule
  ],
  exports: [
    PersonalEditComponent,
    PersonelListComponent
  ]
})
export class PersonalModule { }
