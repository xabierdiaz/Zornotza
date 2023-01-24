import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4Jokua2PageRoutingModule } from './tab4-jokua2-routing.module';

import { Tab4Jokua2Page } from './tab4-jokua2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4Jokua2PageRoutingModule
  ],
  declarations: [Tab4Jokua2Page]
})
export class Tab4Jokua2PageModule {}
