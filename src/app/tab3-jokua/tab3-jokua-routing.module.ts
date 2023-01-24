import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3JokuaPage } from './tab3-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3JokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3JokuaPageRoutingModule {}
