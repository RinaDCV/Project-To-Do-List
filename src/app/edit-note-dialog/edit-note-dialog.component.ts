import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StickyNote } from '../shared/stickyNote.model';

@Component({
  selector: 'app-edit-note-dialog',
  templateUrl: './edit-note-dialog.component.html',
  styleUrls: ['./edit-note-dialog.component.css']
})
export class EditNoteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditNoteDialogComponent>,

    //iput dialog data here: (it is a token)used to pass existing text dialog
    @Inject (MAT_DIALOG_DATA) public stickyNote: StickyNote) { }


  ngOnInit(): void{

  }
  closed(): void{
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm){

    //this line prevent an empty note to be saved
    if (form.invalid) return

    //here we close with a value so that the save button works

    const updatedStickyNote= {
      ...this.stickyNote,
      ...form.value
    }
    this.dialogRef.close(updatedStickyNote);
    
  }



}


