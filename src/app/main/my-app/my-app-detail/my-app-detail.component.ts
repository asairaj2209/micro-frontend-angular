import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-app-detail',
  templateUrl: './my-app-detail.component.html',
  styleUrls: ['./my-app-detail.component.scss']
})
export class MyAppDetailComponent implements OnInit {

  productDetail:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('productDetail')) {
      this.productDetail = JSON.parse(sessionStorage.getItem('productDetail'));
    }
  }

  onNavigation(event) {
    this.router.navigate(['/main/my-app']);
  }
}
