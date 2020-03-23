import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import{environment} from'src/environments/environment'
import { Subject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
   notesApiURL=environment.notesApiURL;
  private Title=new Subject<any>();
  private httpOptions={headers:new HttpHeaders({'content-type':'application/json'})};
  constructor( private httpService:HttpService) { }

  createNotes(note:any):Observable<any>
  {
    return this.httpService.post(this.notesApiURL+environment.createnote,note,{headers:new HttpHeaders({"token":localStorage.token})});
  }
}
