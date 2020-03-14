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
    return this.httpService.post(this.userApiURL+environment.registerURL,user,this.httpOptions);
  }

  loginUser(login:any):Observable<any>
  {
    return this.httpService.post(this.userApiURL+environment.loginURL,login,this.httpOptions);
  }
  forgotPasswordUser(forgotpassword:any):Observable<any>
  {
    return this.httpService.post(this.userApiURL+environment.forgotpasswordURl,forgotpassword,this.httpOptions);
  }
  resetPasswordUser(resetpassword:any):Observable<any>
  {
    return this.httpService.put(this.userApiURL+environment.resetpasswordURl,resetpassword,{headers:new HttpHeaders({'token':localStorage.token})});
  }
}
