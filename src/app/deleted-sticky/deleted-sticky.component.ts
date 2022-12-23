import { NotExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StickyNote } from '../shared/stickyNote.model';
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditNoteDialogComponent } from '../edit-note-dialog/edit-note-dialog.component';

@Component({
  selector: 'app-deleted-sticky',
  templateUrl: './deleted-sticky.component.html',
  styleUrls: ['./deleted-sticky.component.css']
})
export class DeletedStickyComponent implements OnInit {
  stickyNote: StickyNote[] = [];

  showValidationErrors: boolean = false;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.stickyNote = this.dataService.getAllTrash();
  }

  onFormSubmit(form: NgForm) {
    // none of these code will be reachable if the form is invalid

    this.dataService.addstickyNote(new StickyNote(form.value.text));

    this.showValidationErrors = false;
    form.reset();

    if (form.invalid) return (this.showValidationErrors = true);
    else return;
  }

  setCompleted(stickyNote: StickyNote) {
    //set stickyNote to completed with the green check
    stickyNote.completed = !stickyNote.completed;
    const index = this.stickyNote.indexOf(stickyNote);
    this.dataService.archiveStickyNote(index);
  }
  editStickyNote(stickyNote: StickyNote) {
    //need here an index of stickynote
    const index = this.stickyNote.indexOf(stickyNote);

    let dialogRef = this.dialog.open(EditNoteDialogComponent, {
      width: '700px',
      data: stickyNote,
    });

    //need here the where the user will enter new updated information
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateStickyNote(index, result);
      }
    });
  }

  deleteStickyNote(stickyNote: StickyNote) {
    const index = this.stickyNote.indexOf(stickyNote);
    this.dataService.deleteStickyNote(index);
  }
}
