import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5AzalpenaPageRoutingModule } from './tab5-azalpena-routing.module';

import { Tab5AzalpenaPage } from './tab5-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5AzalpenaPageRoutingModule
  ],
  declarations: [Tab5AzalpenaPage]
})
export class Tab5AzalpenaPageModule {}
