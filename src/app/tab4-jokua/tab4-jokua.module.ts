import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4JokuaPageRoutingModule } from './tab4-jokua-routing.module';

import { Tab4JokuaPage } from './tab4-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4JokuaPageRoutingModule
  ],
  declarations: [Tab4JokuaPage]
})
export class Tab4JokuaPageModule {}
