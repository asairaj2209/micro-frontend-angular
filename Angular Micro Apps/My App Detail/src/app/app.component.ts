import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-detail-widget',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  @Input() appDetail:any = { subscriptions: 'AWS', instanceName: 'Instance_aws', subscriptionID: 'MX2021050572268', plan: 'Monthly' };
  @Output() navigation = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

  onNavigate() {
    this.navigation.emit('back');
  }
}
