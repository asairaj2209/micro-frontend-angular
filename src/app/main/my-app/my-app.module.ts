import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAppRoutingModule } from './my-app-routing.module';
import { MyAppComponent } from './my-app.component';
import { MyAppDetailComponent } from './my-app-detail/my-app-detail.component';



@NgModule({
  declarations: [MyAppComponent, MyAppDetailComponent],
  imports: [
    CommonModule,
    MyAppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAppModule {
  
}
// "./widgets/my-app-widget/my-app-widget.js",
// "./widgets/my-app-detail-widget/my-app-detail-widget.js"