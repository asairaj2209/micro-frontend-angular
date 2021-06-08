import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private productsSource = new BehaviorSubject<any>('');
  products = this.productsSource.asObservable();

  constructor() { }

  updateProducts(products:any) {
    this.productsSource.next(products);
  }

 
}
