import { Injectable } from '@angular/core';
import { Task } from '../shared/interfaces/task';
import { TASKS } from '../shared/interfaces/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }

  addTask(task: Task): void {
    TASKS.push(task);
  }

  deleteTask(name: string): void {
    var index: number = TASKS.findIndex(t => t.name === name);
    TASKS.splice(index, 1);
  }
}
