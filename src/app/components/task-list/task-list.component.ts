import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/shared/interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  tasks?: Task[];

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(name: string): void {
    this.taskService.deleteTask(name);
  }
}
