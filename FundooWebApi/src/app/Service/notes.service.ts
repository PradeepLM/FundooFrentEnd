import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import{environment} from'src/environments/environment'
import { Subject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Notes } from '../Model/notes.model';


const httpOptions =
{headers: new HttpHeaders({"Content-Type":"application/json",
"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Yx4T3nLcGpGAbKB7m2D4KskGISJA9NLP29A1hVHQuLw"
})
};
@Injectable({
  providedIn: 'root'
})

export class NotesService {
    

  private notesApiURL=environment.notesApiURL;
  private Title=new Subject<any>();
  private token=(localStorage.token)
  private httpOptions={headers:new HttpHeaders({'content-type':'application/json'})};
  
  
  constructor( private httpService:HttpService) { }

  createNotes(note:any):Observable<any>
  { 
    return this.httpService.post(this.notesApiURL+environment.createnote,note,httpOptions); 
  }

  getAllNote(): Observable<any> { 
    return this.httpService.get(this.notesApiURL+environment.getAllNotes,{headers:new HttpHeaders({'token':localStorage.token})});
}

pinNote(note:any): Observable<any> { 
  return this.httpService.get(this.notesApiURL+environment.pinNote+note.id,{headers:new HttpHeaders({'token':this.token})});
}

getPinnedAllNote(): Observable<any> { 
  return this.httpService.get(this.notesApiURL+environment.getPinNote,{headers:new HttpHeaders({'token':this.token})});

}

getArchieveNote(): Observable<any> { 
  return this.httpService.get(this.notesApiURL+environment.getArchieveNote,{headers:new HttpHeaders({'token':this.token})});
}

getTrashedNote(): Observable<any> {  
  return this.httpService.get(this.notesApiURL+environment.getTrashNotes,{headers:new HttpHeaders({'token':this.token})});

}

}
