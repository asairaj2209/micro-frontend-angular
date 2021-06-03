import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'my-app', loadChildren: () => import('./my-app/my-app.module').then(m => m.MyAppModule) },
      { path: 'my-account', loadChildren: () => import('./my-account/my-account.module').then(m => m.MyAccountModule) }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
