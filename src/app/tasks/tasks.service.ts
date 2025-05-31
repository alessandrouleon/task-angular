import { Injectable } from "@angular/core";
import { type NewTeskDate, Task } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
  private   tasks: Task[] = [
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

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTasks(taskData: NewTeskDate, userId: string) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: userId,
      title: taskData.title,
      sumary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removeTasks(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

}