import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule

  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppMaterialModule { }
