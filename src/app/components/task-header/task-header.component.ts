import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent {
  title: string = 'Task Tracker'
  isHidden: boolean = false;

  @Output() btnClick = new EventEmitter<boolean>();

  onClick(): void {
    this.isHidden = !this.isHidden
    this.btnClick.emit();
  }
}
