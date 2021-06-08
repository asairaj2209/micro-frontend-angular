import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.scss']
})
export class MyAppComponent implements OnInit, OnDestroy {
  @Output() navigation = new EventEmitter();
  products:any;
  subscription: Subscription;

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
    console.log('my app init');
    this.onFetchProducts();
  }

  onFetchProducts() {
    this.subscription = this.appService.products.subscribe((products)=>{
      this.products = products;
      console.log('pdt changes ',this.products)
    });
  }

  onNavigatePdtDetail(product) {
    // sessionStorage.setItem('productDetail', JSON.stringify(product));
    // this.router.navigate(['./app-detail']);
    this.navigation.emit(product);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
