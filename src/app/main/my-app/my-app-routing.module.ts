import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAppComponent } from './my-app.component';
import { MyAppDetailComponent } from './my-app-detail/my-app-detail.component';

const routes: Routes = [
  { path: '', component: MyAppComponent },
  { path: 'detail', component: MyAppDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAppRoutingModule { }
