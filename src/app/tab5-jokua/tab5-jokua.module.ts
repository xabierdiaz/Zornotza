import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5JokuaPageRoutingModule } from './tab5-jokua-routing.module';

import { Tab5JokuaPage } from './tab5-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5JokuaPageRoutingModule
  ],
  declarations: [Tab5JokuaPage]
})
export class Tab5JokuaPageModule {}
