import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// import { AddNote } from 'src/type';
import { NOTES } from 'src/note';

@Component({
  selector: 'add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  addTodoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
  });
  handleTodo(value: any) {
    //! how to use ts here
    const title = value.title;
    const text = value.text;

    if (this.addTodoForm.valid) {
      const ids = NOTES.map((note) => note.id);
      let max = 0;
      if (ids.length > 0) {
        max = Math.max(...ids);
      } else {
        max = 1;
      }
      const newTodo = {
        id: max + 1,
        title: title,
        text: text,
      };
      NOTES.push(newTodo);
      // console.log(NOTES);  //! how to access NOTES from this component
      this.addTodoForm.reset();
    }
  }
}
