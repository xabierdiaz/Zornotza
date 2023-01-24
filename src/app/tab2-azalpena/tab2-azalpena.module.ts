import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2AzalpenaPageRoutingModule } from './tab2-azalpena-routing.module';

import { Tab2AzalpenaPage } from './tab2-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2AzalpenaPageRoutingModule
  ],
  declarations: [Tab2AzalpenaPage]
})
export class Tab2AzalpenaPageModule {}
