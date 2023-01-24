import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2JokuaPageRoutingModule } from './tab2-jokua-routing.module';

import { Tab2JokuaPage } from './tab2-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2JokuaPageRoutingModule
  ],
  declarations: [Tab2JokuaPage]
})
export class Tab2JokuaPageModule {}
