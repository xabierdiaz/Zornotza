import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2AzalpenaPage } from './tab2-azalpena.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2AzalpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2AzalpenaPageRoutingModule {}
