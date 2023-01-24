import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab5JokuaPage } from './tab5-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5JokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5JokuaPageRoutingModule {}
