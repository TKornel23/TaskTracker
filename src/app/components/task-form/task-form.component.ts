import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/shared/interfaces/task';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  addTaskForm = this.formBuilder.group({
    name: '',
    time: '',
    reminder: false
  });

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {}

  addTask(task: Task): void {
    this.taskService.addTask(task);
  }

  onSubmit(): void {
    if(this.addTaskForm.value.name == '' || this.addTaskForm.value.time == '') {
      console.log('Error during validation');
    }
    else {

      var task: Task = {
        name: this.addTaskForm.getRawValue().name?.toString()!,
        time: this.addTaskForm.getRawValue().time?.toString()!,
        reminder: this.addTaskForm.getRawValue().reminder!
      };

      this.taskService.addTask(task);

      this.addTaskForm.reset();
    }
  }
}
