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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()

   }

  onFormSubmit(form: NgForm){
    console.log("FORM SUBMITTED")
    console.log(form)

    this.dataService.addTodo(new Todo(form.value.text))

  }

}

