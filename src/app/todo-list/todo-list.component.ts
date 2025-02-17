import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [FormsModule, CommonModule],
})
export class TodoListComponent implements OnInit {
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
    });
    form.reset();
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted
  }
}
