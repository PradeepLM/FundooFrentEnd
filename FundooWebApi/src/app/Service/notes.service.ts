import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import{environment} from'src/environments/environment'
import { Subject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


const httpOptions =
{headers: new HttpHeaders({"Content-Type":"application/json",
"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Yx4T3nLcGpGAbKB7m2D4KskGISJA9NLP29A1hVHQuLw"
})
};
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
    
    return this.httpService.post(this.notesApiURL+environment.createnote,note,httpOptions);
    
  }
}
