import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent implements  OnInit
{

  title : string;

  constructor(private router : Router)
  {
    this.title = "Mobiles";
  }

  ngOnInit(){

  }

}
