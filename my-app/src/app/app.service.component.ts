/**
 * Created by ketangote on 5/29/17.
 */


import{Injectable}   from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class AppServiceComponent {

  responseData : any;
  parentRef : any;

  constructor(private _http : Http){

  }

  fetchLaptopData(parentRef : any, serviceUrl : string, methodType: string){
    this.parentRef = parentRef;
    let requestJson = {};
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'  });
    let options = new RequestOptions({headers : headers,method : methodType});
    if(methodType == "post"){
      this._http.post(serviceUrl,requestJson,options).subscribe(
        response=>{
          this.responseData = response.json();
        },
        error=>{
        },
        ()=>{
          this.setLaptopData();
        }
      );
    }else if(methodType == "get"){
      this._http.get(serviceUrl,options).subscribe(
        response=>{
          this.responseData = response.json();
        },
        error=>{
        },
        ()=>{
          this.setLaptopData();
        }
      );
    }
  }

  setLaptopData (){
    this.parentRef.setLaptopData(this.responseData);
  }

  fetchMobileData(parentRef : any, serviceUrl : string, methodType: string){
    this.parentRef = parentRef;
    let requestJson = {};
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'  });
    let options = new RequestOptions({headers : headers,method : methodType});
    if(methodType == "post"){
      this._http.post(serviceUrl,requestJson,options).subscribe(
        response=>{
          this.responseData = response.json();
        },
        error=>{
        },
        ()=>{
          this.setMobileData();
        }
      );
    }else if(methodType == "get"){
      this._http.get(serviceUrl,options).subscribe(
        response=>{
          this.responseData = response.json();
        },
        error=>{
        },
        ()=>{
          this.setMobileData();
        }
      );
    }
  }

  setMobileData (){
    this.parentRef.setMobileData(this.responseData);
  }

}
