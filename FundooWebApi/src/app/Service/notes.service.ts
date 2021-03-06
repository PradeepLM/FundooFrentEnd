import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import{environment} from'src/environments/environment'
import { Subject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
  private _autoRefresh$ = new Subject();
  get autoRefresh$() {
    return this._autoRefresh$;
  }
    

  private notesApiURL=environment.notesApiURL;
  private Title=new Subject<any>();
  private token=(localStorage.token);
  private searchNoteData=new Subject<any>();
  private httpOptions={headers:new HttpHeaders({'content-type':'application/json'})};
  view=new Subject<any>();
  
  constructor( private httpService:HttpService,private http: HttpClient) { }

  createNotes(note:any):Observable<any>
  { 
    return this.httpService.post(this.notesApiURL+environment.createnote,note,httpOptions); 
  }

  getAllNote(): Observable<any> { 
    return this.httpService.get(this.notesApiURL+environment.getAllNotes,{headers:new HttpHeaders({'token':localStorage.token})});
}

pinNote(note:any): Observable<any> { 
  return this.httpService.post(this.notesApiURL+environment.pinNote+note.id,{},{headers:new HttpHeaders({'token':this.token})});
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

archieveNote(note:any): Observable<any> { 
  return this.httpService.put(this.notesApiURL+environment.archieveNote+note.id,{},{headers:new HttpHeaders({'token':this.token})});
}

colorNote(note:any,color:String): Observable<any> { 
  return this.httpService.post(this.notesApiURL+environment.addcolor+note.id+'?color='+color,{},{headers:new HttpHeaders({'token':this.token})});  
}




updateNote(user: any): Observable<any> { 
  console.log(this.token,'ffffffffffffffffffffffllll');
  return this.httpService.put(this.notesApiURL+environment.updateNote,user,{headers:new HttpHeaders({'token':this.token})});
}
deleteNote(note:any): Observable<any> { 
  return this.httpService.delete(this.notesApiURL+environment.deleteNote+note.id,{headers:new HttpHeaders({'token':this.token})});
}

reminder(noteId : number, notes, data) {
  console.log(notes,'sssssssss');
  console.log(notes,'notes',data,'data',noteId,'notes information remaindefr');
  return this.http.post<any>(environment.notesApiURL+environment.reminderNoteUrl+'?noteId='+noteId+'/'+data ,{headers:new HttpHeaders({'token':this.token})});
  }
  removeremainder(note:any): Observable<any> { 
    console.log(note,'remove reaminfderreddder');
    return this.httpService.get(this.notesApiURL+environment.removeremainder+'?noteId='+note.id,{headers:new HttpHeaders({'token':this.token})});    
}

setView(data:any){
  console.log('Service set ');
  
 this.view.next({view:data});
 console.log('data ',this.view);
 
}
getView():Observable<any>{
 console.log('Service get');
 return this.view.asObservable();
}
addremainder(note:any): Observable<any> { 

  return this.httpService.post(this.notesApiURL+environment.addremainder+'?noteId='+note.id,{note},{headers:new HttpHeaders({'token':this.token})});

  

}

}
