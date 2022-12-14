import { NotExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.models'
import { DataService } from '../shared/data.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.css']
})
export class StickyNoteComponent implements OnInit {

  todos: Todo[] = [];

  showValidationErrors : boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()

   }

  onFormSubmit(form: NgForm){
       if (form.invalid) return alert("Form is invalid");
    // none of these code will be reachable if the form is invalid
  
 

    this.dataService.addTodo(new Todo(form.value.text));

    this.showValidationErrors = true;
    form.reset()

  }

}

