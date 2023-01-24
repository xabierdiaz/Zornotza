import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab5AzalpenaPage } from './tab5-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5AzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5AzalpenaPageRoutingModule {}
