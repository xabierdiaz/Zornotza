import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab5Jokua2Page } from './tab5-jokua2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5Jokua2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5Jokua2PageRoutingModule {}
