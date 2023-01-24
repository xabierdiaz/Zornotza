import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: 'tab6',
        loadChildren: () => import('../tab6/tab6.module').then(m => m.Tab6PageModule)
      },
      {
        path: 'tab7',
        loadChildren: () => import('../tab7/tab7.module').then(m => m.Tab7PageModule)
      },
      {
        path: 'tab8',
        loadChildren: () => import('../tab8/tab8.module').then(m => m.Tab8PageModule)
      },
      {
        path: 'tab2-azalpena',
        loadChildren: () => import('../tab2-azalpena/tab2-azalpena.module').then(m => m.Tab2AzalpenaPageModule)
      },
      {
        path: 'tab2-jokua',
        loadChildren: () => import('../tab2-jokua/tab2-jokua.module').then(m => m.Tab2JokuaPageModule)
      },
      {
        path: 'tab3-azalpena',
        loadChildren: () => import('../tab3-azalpena/tab3-azalpena.module').then(m => m.Tab3AzalpenaPageModule)
      },
      {
        path: 'tab3-jokua',
        loadChildren: () => import('../tab3-jokua/tab3-jokua.module').then(m => m.Tab3JokuaPageModule)
      },
      {
        path: 'tab6-jokua',
        loadChildren: () => import('../tab6-jokua/tab6-jokua.module').then(m => m.Tab6JokuaPageModule)
      },
      {
        path: 'tab6-azalpena',
        loadChildren: () => import('../tab6-azalpena/tab6-azalpena.module').then(m => m.Tab6AzalpenaPageModule)
      },
      {
        path: 'tab7-jokua',
        loadChildren: () => import('../tab7-jokua/tab7-jokua.module').then(m => m.Tab7JokuaPageModule)
      },
      {
        path: 'tab7-azalpena',
        loadChildren: () => import('../tab7-azalpena/tab7-azalpena.module').then(m => m.Tab7AzalpenaPageModule)
      },
      {
        path: 'tab8-jokua',
        loadChildren: () => import('../tab8-jokua/tab8-jokua.module').then(m => m.Tab8JokuaPageModule)
      },
      {
        path: 'tab8-azalpena',
        loadChildren: () => import('../tab8-azalpena/tab8-azalpena.module').then(m => m.Tab8AzalpenaPageModule)
      },

      

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
