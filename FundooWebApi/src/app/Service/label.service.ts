import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private labelId = new Subject<any>();
  private _autoRefresh$ = new Subject();
  private labelList=new Subject<any>();
 
  private labelApiURL=environment.labelurl;
  private token=(localStorage.token)
  private httpOptions={headers:new HttpHeaders({'content-type':'application/json'})
};
  constructor(private httpService:HttpService) { }
  
  get autoRefresh$() {
    return this._autoRefresh$;
  }

  getAlllabel(): Observable<any> {        
    return this.httpService.get(this.labelApiURL+environment.getalllabels,{headers:new HttpHeaders({'token':this.token})});
  }
  
  getNotesByLabel(labelId){
    return this.httpService.get(`${this.labelApiURL}/${environment.getNotesByLabelId}?labelId=${labelId}`,{headers:new HttpHeaders().set('token',sessionStorage.token)});
  }

  createLabel(label){
    return this.httpService.post(this.labelApiURL+environment.createLabel,label,{headers:new HttpHeaders({'token':this.token})});
  }
  deleteLabel(label){
    return this.httpService.delete(this.labelApiURL+environment.deleteLabel+label.name,{headers:new HttpHeaders({'token':this.token})});
  }
  addLabel(noteId:any,labelId){
    return this.httpService.post(`${this.labelApiURL}/${environment.addLabel}?labelId=${labelId}&noteId=${noteId}`,{},{headers:new HttpHeaders().set('token',sessionStorage.token)});
  }

  setLabelList(message:any){
    this.labelList.next({label:message});
}
getLabelList(){
  return this.labelList.asObservable();
} 

 
}
