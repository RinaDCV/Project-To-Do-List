import { NotExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StickyNote } from '../shared/stickyNote.model';
import { DataService } from '../shared/data.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.css']
})
export class StickyNoteComponent implements OnInit {

  stickyNote: StickyNote[] = [];

  showValidationErrors : boolean= false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.stickyNote = this.dataService.getAllStickyNote()

   }

  onFormSubmit(form: NgForm){
   


    // none of these code will be reachable if the form is invalid
  
    this.dataService.addstickyNote(new StickyNote(form.value.text));

    this.showValidationErrors= false;
    form.reset()
    
    if (form.invalid) return this.showValidationErrors= true;
    else
    return;


  }

  setCompleted(stickyNote: StickyNote){
    //set stickyNote to completed
    stickyNote.completed = !stickyNote.completed;
  }

}

