/**
 * Created by ketangote on 5/29/17.
 */

import {Component, OnInit} from '@angular/core';
import {AppServiceComponent} from "./app.service.component";

@Component({
  selector: 'mobiles-page',
  templateUrl: './mobiles.component.html',
  providers : [AppServiceComponent]
})

export class MobilesPageComponent implements OnInit {

  jsonData : any;

  data : any[];

  constructor(private appService : AppServiceComponent) {
    console.log('MobilesPageComponent started');
    this.jsonData="";
  }

  ngOnInit() {

  }


  ngAfterContentInit() {

    this.appService.fetchMobileData(this,"assets/api/mobiles.json",'get');
  }

  setMobileData(data:any){
    console.log("data-->"+data);
    this.jsonData = data
    this.data = this.jsonData.response.data;

  }

}
