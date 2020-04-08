import { Pipe, PipeTransform } from '@angular/core';
import { Notes } from '../Model/notes.model';

@Pipe({
  name: 'searchnote'
})
export class SearchnotePipe implements PipeTransform {

  transform(notes: Notes[], searchTerm: string): Notes[] {
    if(!notes || !searchTerm){
      return notes;
    }
    return notes.filter(notes=>
      notes.title.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1);
      // (notes.description).toLowerCase().indexOf(searchTerm.toLowerCase())!=-1));
  }

}       
