import { Component, Input } from '@angular/core';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from './task/task.component';
import { type NewTeskDate } from './task/task.model';
import { TasksService } from './tasks.service';

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


  constructor(private tasksService: TasksService) {
    // Initialization logic can go here
  }
  get selectedUserTesks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  onCompleteTask(id: string) {

  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancekAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTeskDate) {
    this.tasksService.addTasks(taskData, this.userId);
    this.isAddingTask = false;

  }
}
