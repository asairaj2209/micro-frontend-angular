import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.scss']
})
export class MyAppComponent implements OnInit {

  myProducts = [
    { subscriptions: 'AWS', instanceName: 'Instance_aws', subscriptionID: 'MX2021050572268', plan: 'Monthly' },
    { subscriptions: 'Azure', instanceName: 'Instance_azure', subscriptionID: 'MX2021050572243', plan: 'Monthly' },
    { subscriptions: 'GCP', instanceName: 'Instance_gcp', subscriptionID: 'MX20210505722212', plan: 'Monthly' },
    { subscriptions: 'Microsoft 365 E3', instanceName: 'Instance_m_e3', subscriptionID: 'MX2021050572555', plan: 'Monthly' },
    { subscriptions: 'Microsoft 365 E5', instanceName: 'Instance_m_e5', subscriptionID: 'MX2021050572279', plan: 'Monthly' },
  ];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAppData();
  }

  getAppData() {
    this.http.get("https://reqres.in/api/unknown").subscribe((res:any)=>{
      // console.log(res)
      this.myProducts = [];
      for(let i=0; i<res.data.length; i++) {
        let obj = {
          subscriptions: res.data[i].name,
          instanceName:res.data[i].pantone_value,
          subscriptionID:res.data[i].color,
          plan: res.data[i].id
        }
        this.myProducts.push(obj);
      }
    }, (err)=>{
      alert('App Data API Failed');
    });
  }

  onNavigation(event) {
    sessionStorage.setItem('productDetail', JSON.stringify(event.detail));
    this.router.navigate(['/main/my-app/detail']);
  }

}
