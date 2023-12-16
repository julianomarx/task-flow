import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { GeanModule } from 'src/app/gean/gean.module';

import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    GeanModule,
    MatProgressBarModule
  ],
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule
  ]
})
export class AppMaterialModule { }
