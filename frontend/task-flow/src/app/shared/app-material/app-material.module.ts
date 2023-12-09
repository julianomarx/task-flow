import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class AppMaterialModule { }
