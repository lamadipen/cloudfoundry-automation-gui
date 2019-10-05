import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LabelService {
  private host: String = environment.apiUrl;

  constructor(private http: Http) { }

  saveLabel(data):Observable<any>{
    return this.http.post(this.host+"",data);
  }

  getLabels(){
    return this.http.get(this.host+"")
  }
}
