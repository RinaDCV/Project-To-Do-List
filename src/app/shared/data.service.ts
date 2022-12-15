import { Injectable } from '@angular/core';
import { StickyNote } from './stickyNote.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 //creating a propery to contain the data
 
  stickyNote:StickyNote [] = [
   new StickyNote('this is a new test!', true),
   new StickyNote( 'loren ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, molestiae facilis, exercitationem impedit vitae tenetur accusantium, non eius quos neque sint mollitia cum aperiam excepturi et laboriosam provident illo asperiores!')
  ];
  
  constructor() { }


  //creating methods
getAllStickyNote() {
  return this.stickyNote
}

addstickyNote(stickyNote: StickyNote) {
  this.stickyNote.push(stickyNote)
}

updateStickyNote(index: number, updatedStickyNote: StickyNote){
  this.stickyNote[index] = updatedStickyNote
}

deleteStickyNote(index: number) {
  this.stickyNote.splice(index, 1)
}


}
