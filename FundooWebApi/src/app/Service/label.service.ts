import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable, Subject, } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  //private noteId = new Subject<any>();
 // private labelId = new Subject<any>();
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
  
    createLabel(label){
    return this.httpService.post(this.labelApiURL+'/create',label,{headers:new HttpHeaders({'token':this.token})});
  }
  
  deleteLabel(label :any): Observable<any> {
    console.log(label,'ssss');
    
    return this.httpService.delete(this.labelApiURL+'/delete',{headers:new HttpHeaders({'token':this.token})});

  }
 
  addLabel(labelId :any,noteId:any): Observable<any> { 
    console.log(labelId,noteId);
  return this.httpService.post(this.labelApiURL+environment.addLabel+'?labelId='+labelId+'?noteId='+noteId,{},{headers:new HttpHeaders({'token':this.token})});
  }

  getlabelnotes(labelId :any): Observable<any> { 
    return this.httpService.get(this.labelApiURL+environment.getlabelnotes+'?labelId='+labelId,{headers:new HttpHeaders({'token':this.token})});
  }

  createandmaplabel(label :any,noteId:any): Observable<any> { 
    return this.httpService.post(this.labelApiURL+environment.createadmap+'?noteId='+noteId,label,{headers:new HttpHeaders({'token':this.token})})
  }
  
  setLabelList(message:any){
    this.labelList.next({label:message});
    }
  getLabelList(){
  return this.labelList.asObservable();
  } 

 
}
