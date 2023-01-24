import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3AzalpenaPage } from './tab3-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3AzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3AzalpenaPageRoutingModule {}
