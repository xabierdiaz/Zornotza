import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3AzalpenaPageRoutingModule } from './tab3-azalpena-routing.module';

import { Tab3AzalpenaPage } from './tab3-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3AzalpenaPageRoutingModule
  ],
  declarations: [Tab3AzalpenaPage]
})
export class Tab3AzalpenaPageModule {}
