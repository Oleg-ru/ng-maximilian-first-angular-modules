import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewTaskType } from '../task.module';

@Component({
  standalone: false,
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {
  @Input({ required: true }) userId?: string;

  @Output() closeModal = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<NewTaskType>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseModal() {
    this.closeModal.emit();
  }

  onSubmit() {
    if (this.userId) {
      this.addNewTask.emit({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      });
    }
  }
}
