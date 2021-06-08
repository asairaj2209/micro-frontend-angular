import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
   
  }
  ngDoBootstrap() { 
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('my-app-detail-widget', el);
  }
}
