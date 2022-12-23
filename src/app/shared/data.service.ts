import { Injectable } from '@angular/core';
import { StickyNote } from './stickyNote.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 //creating a propery to contain the data
 
  stickyNotes:StickyNote [] = [
   new StickyNote('this is a new test!', true),
   new StickyNote( 'loren ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, molestiae facilis, exercitationem impedit vitae tenetur accusantium, non eius quos neque sint mollitia cum aperiam excepturi et laboriosam provident illo asperiores!')
  ];
  
  trash:StickyNote [] = [];
  
  archive:StickyNote [] = [];

  constructor() { }


  //creating methods
getAllStickyNote() {
  return this.stickyNotes
}

addstickyNote(stickyNote: StickyNote) {
  this.stickyNotes.push(stickyNote);
}

updateStickyNote(index: number, updatedStickyNote: StickyNote){
  this.stickyNotes[index] = updatedStickyNote
}
archiveStickyNote(index: number) {
  this.archive.push(this.stickyNotes[index]);
  this.stickyNotes.splice(index, 1);
}
deleteStickyNote(index: number) {
  this.trash.push(this.stickyNotes[index]);
  this.stickyNotes.splice(index, 1);
}

getAllTrash() {
  return this.trash;
}
getAllArchive() {
  return this.archive;
}
}
