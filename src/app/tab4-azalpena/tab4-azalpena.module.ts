import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4AzalpenaPageRoutingModule } from './tab4-azalpena-routing.module';

import { Tab4AzalpenaPage } from './tab4-azalpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4AzalpenaPageRoutingModule
  ],
  declarations: [Tab4AzalpenaPage]
})
export class Tab4AzalpenaPageModule {}
