import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app-widget',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  @Input() products:any;
  @Output() navigation = new EventEmitter();

  productsData:any = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    console.log('app init')
  }

  ngOnChanges() {
    console.log('app comp ', this.products)
    if(typeof this.products == 'string'){
      this.productsData = JSON.parse(this.products);
    }
    else {
      this.productsData = this.products;
    }
    this.appService.updateProducts(this.productsData);
  }

  onNavigation(event) {
    this.navigation.emit(event);
  }
 

}
