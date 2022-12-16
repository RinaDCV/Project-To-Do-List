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

  @Output() stickyNoteClicked = new EventEmitter<string>();


  constructor() {}

  ngOnInit():void {

  }

  onStickyNoteClicked(): void{
    this.stickyNoteClicked.emit();

  }

}
