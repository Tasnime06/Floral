import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Time } from '../../classes/time';

const url="https://www.timeapi.io/api/Time/current/ip?ipAddress=";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  tomps!:string;

  constructor(private http:HttpClient) {
   }
  ngOnInit(): void {
  }

  // getlocaltime(){
  //   this.http.get<Time>("http://worldtimeapi.org/api/ip").subscribe(data => this.tomps=data.datetime);
  //   let aux = new Date(this.tomps);
  //   return aux.toLocaleTimeString();
  // }

}
