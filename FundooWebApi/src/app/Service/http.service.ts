import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  public post(url :any,body :any,head: any):Observable<any>{
    return this.http.post(url,body,head);
  }
  public get(url :any,options :any):Observable<any>{
    return this.http.get(url,options);
  }
  public put(url :any,body :any,head: any):Observable<any>{
    return this.http.put(url,body,head);
  }
  public delete(url :any,options :any):Observable<any>{
    return this.http.delete(url,options);
  }
}
