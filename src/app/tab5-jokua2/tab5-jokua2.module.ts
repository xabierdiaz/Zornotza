import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5Jokua2PageRoutingModule } from './tab5-jokua2-routing.module';

import { Tab5Jokua2Page } from './tab5-jokua2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5Jokua2PageRoutingModule
  ],
  declarations: [Tab5Jokua2Page]
})
export class Tab5Jokua2PageModule {}
