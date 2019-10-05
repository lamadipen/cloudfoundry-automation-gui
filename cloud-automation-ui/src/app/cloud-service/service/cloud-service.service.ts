import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, HttpModule} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class CloudServiceService {
  private host: string = environment.apiUrl;

  constructor(private http:Http) { }

  getServiceLabel():Observable<any> {
    return this.http.get(this.host+"cloud/serviceLabel");
  }

  getServicePlans(serviceLabelId:any): Observable<any> {
    return this.http.get(this.host+"cloud/serviceLabel/"+serviceLabelId+"/servicePlan");
  }

  saveNewService(cloudService): Observable<any>  {
    return this.http.post(this.host+"cloud/service",cloudService);
  }

  getServices(): Observable<any> {
    return this.http.get(this.host+"cloud/service");
  }

  getPools(): Observable<any> {
    return this.http.get(this.host+"cloud/pool");
  }

  deployService(serviceToDeploy: any[]): Observable<any>  {
    return this.http.post(this.host+"cloud/deployService/",serviceToDeploy);
  }

  checkServiceStatusPool(name, poolId) {
    return this.http.get(this.host+"cloud/serviceStatus/"+name+"/"+poolId);
  }

}
