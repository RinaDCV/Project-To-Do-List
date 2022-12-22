import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { StickyNote } from '../shared/stickyNote.model';
import { StickyNoteComponent } from '../sticky-note/sticky-note.component';


@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
  
  @Input()
  stickyNote!: StickyNote;
//eventEmmiter is sending a signal that the stickynote was clicked
  @Output() stickyNoteClicked = new EventEmitter<string>();
  @Output() editClicked = new EventEmitter<string>();
  @Output() deleteClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit():void {

  }

  onStickyNoteClicked(): void{
    this.stickyNoteClicked.emit();

  }

  onEditClicked():void{
    this.editClicked.emit();
  }

  onDeleteClicked():void {
    this.deleteClicked.emit();
  }

  

}
