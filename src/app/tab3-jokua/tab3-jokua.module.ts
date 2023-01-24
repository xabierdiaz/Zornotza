import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3JokuaPageRoutingModule } from './tab3-jokua-routing.module';

import { Tab3JokuaPage } from './tab3-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3JokuaPageRoutingModule
  ],
  declarations: [Tab3JokuaPage]
})
export class Tab3JokuaPageModule {}
