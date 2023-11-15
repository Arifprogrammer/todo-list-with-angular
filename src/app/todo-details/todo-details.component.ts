import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Note, NOTES } from 'src/note';

@Component({
  selector: 'todo-details',
  standalone: true,
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
  imports: [RouterModule],
})
export class TodoDetailsComponent implements OnInit {
  @Input({ transform: numberAttribute }) id!: number;
  // @Input('id') stringId = '';
  notes: Note[] = NOTES;
  note!: Note | undefined;
  ngOnInit(): void {
    console.log(this.id); //Logs a number
    // console.log(this.stringId); Logs a string
    this.note = NOTES.find((note) => note.id === this.id);
    console.log(this.note);
  }
}
