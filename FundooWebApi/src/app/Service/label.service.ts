import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private labelApiURL=environment.labelurl;
  private token=(localStorage.token)
  private httoptions={headers:new HttpHeaders({'content-type':'application/json'})
};
  constructor(private httpService:HttpService) { }

  getAlllabel(): Observable<any> {        
    return this.httpService.get(this.labelApiURL+environment.getalllabels,{headers:new HttpHeaders({'token':this.token})});
}

}
