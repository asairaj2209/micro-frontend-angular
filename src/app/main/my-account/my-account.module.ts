import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';


@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    MyAccountRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAccountModule {
  // constructor() {
  //   const bundles = ['my-app-detail-widget'];

  //   bundles.forEach(name => document.body.appendChild(this.getScriptTag(name)));

  // }

  // getScriptTag(fileName: string): HTMLElement {
  //   const scriptTag = document
  //     .createElement(`script`);

  //   scriptTag.setAttribute('src', `assets/widgets/${fileName}/${fileName}.js`);
  //   scriptTag.setAttribute('type', 'text/javascript');

  //   return scriptTag;
  // }
}
