import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4Jokua2Page } from './tab4-jokua2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Jokua2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4Jokua2PageRoutingModule {}
