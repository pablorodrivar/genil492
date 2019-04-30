import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

import { IonicModule } from '@ionic/angular';

import { CancioneroPage } from './cancionero.page';

const routes: Routes = [
  {
    path: '',
    component: CancioneroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CancioneroPage]
})
export class CancioneroPageModule {}
