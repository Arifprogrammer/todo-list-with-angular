import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NOTES, Note } from 'src/note';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [CommonModule, NgFor, AddTodoComponent, RouterModule],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent {
  notes = NOTES || [];

  handleDelete(note: Note) {
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
  }
}
