import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4AzalpenaPage } from './tab4-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4AzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4AzalpenaPageRoutingModule {}
