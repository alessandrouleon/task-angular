import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTeskDate } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  minDate = "2025-05-25";
@Output() cancel = new EventEmitter<void>();
@Output() add = new EventEmitter<NewTeskDate>();
enteredTitle:  string = '';
enteredSummary: string = '';
enteredDate: string = '';


onCancel() {
  this.cancel.emit();
}

onSubmit() {
  this.add.emit({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.enteredDate
  })
}
}
