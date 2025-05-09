import { Component, Input } from '@angular/core';

interface Task {
  id: string;
  userId: string;
  title: string;
  sumary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
