import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import{environment} from'src/environments/environment'
import { from, Subject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userApiURL=environment.userApiURL;
  private Name=new Subject<any>();
  private httpOptions={headers:new HttpHeaders({'content-type':'application/json'})};
  constructor(private httpService:HttpService) { }
  registerUser(user:any):Observable<any>
  {
    console.log("User Email",user.email);
    return this.httpService.post(this.userApiURL+environment.registerURL,user,this.httpOptions);
  }
}
