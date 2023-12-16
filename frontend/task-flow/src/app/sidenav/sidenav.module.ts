import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './sidenav/sidenav.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';


@NgModule({
  exports:[SidenavComponent],
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class SidenavModule { }
