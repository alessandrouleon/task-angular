import { Component, Input } from '@angular/core';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from './task/task.component';
import { type NewTeskDate, Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u0',
      title: 'Master Angular',
      sumary: 'Task 1 description',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master TypeScriptrrrrrrrrrrrrrrrrrrrrrrrrr',
      sumary: 'Task 2 sumary',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Master LLM',
      sumary: 'Task 3 description',
      dueDate: '2025-12-31',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Master Pyton',
      sumary: 'Task 4 Pyton',
      dueDate: '2025-12-31',
    },
  ];
  get selectedUserTesks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancekAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTeskDate) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: this.userId,
      title: taskData.title,
      sumary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;

  }
}
