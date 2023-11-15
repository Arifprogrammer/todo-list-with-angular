import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
  { path: '', component: TodosListComponent },
  { path: 'todo/:id', component: TodoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
