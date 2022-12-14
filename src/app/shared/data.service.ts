import { Injectable } from '@angular/core';
import { Todo } from './todo.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 //creating a propery to contain the data
 
 todos: Todo[] = [
  new Todo('this is a test', true),
  new Todo('loremloremloremloremloremloreloreloreloremloremlorememloremloreloreloreloremmmloreloremmmloremoremmmloreloremmmlorem')
 
  
 ]



  constructor() { }

  //creating methods
getAllTodos(){
  return this.todos
}

addTodo(todo: Todo) {
  this.todos.push(todo)
}

updateTodo(index: number, updatedTodo: Todo){
  this.todos[index] = updatedTodo
}

deleteTodo(index: number) {
  this.todos.splice(index, 1)
}


}
