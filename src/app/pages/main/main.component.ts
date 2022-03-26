import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { common } from 'src/app/app.common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public sidebarMenuOpened = true;
  @ViewChild('contentWrapper', { static: false }) contentWrapper;

  countItem: number = 0;
  

  constructor(private renderer: Renderer2, public router: Router) {}
  public com: common;
  ngOnInit() {
    this.com = new common(this.router);
  }

  arrayProduct = [
    {"bg": 'url("https://i.ibb.co/L8Nrb7p/1.jpg") no-repeat center' },
    {"bg": 'url("https://i.ibb.co/cLnZjnS/2.jpg") no-repeat center',},
    {"bg": 'url("https://i.ibb.co/L8Nrb7p/1.jpg") no-repeat center',},
    {"bg": 'url("https://i.ibb.co/L8Nrb7p/1.jpg") no-repeat center',},
    {"bg": 'url("https://i.ibb.co/L8Nrb7p/1.jpg") no-repeat center',},
    {"bg": 'url("https://i.ibb.co/L8Nrb7p/1.jpg") no-repeat center',},
    {"bg": 'url("https://i.ibb.co/L8Nrb7p/1.jpg") no-repeat center',},
    {"bg": 'url("https://i.ibb.co/L8Nrb7p/1.jpg") no-repeat center',},
  ];


  getCountItem() {
    this.countItem ++;
  }
}
