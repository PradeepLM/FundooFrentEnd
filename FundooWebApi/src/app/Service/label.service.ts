import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private _autoRefresh$ = new Subject();
  get autoRefresh$() {
    return this._autoRefresh$;
  }
  private labelApiURL=environment.labelurl;
  private token=(localStorage.token)
  private httpOptions={headers:new HttpHeaders({'content-type':'application/json'})
};
  constructor(private httpService:HttpService) { }

  getAlllabel(): Observable<any> {        
    console.log('getgglabel');
    return this.httpService.get(this.labelApiURL+environment.getalllabels,{headers:new HttpHeaders({'token':this.token})});
  }


}
