import { DatePipe } from "@angular/common";
import { Component, inject, Input } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from "../tasks.service";
import { Task } from './task.model';
@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTasks(this.task.id);
  }
}
