import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskHeaderComponent } from './components/task-header/task-header.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFooterComponent } from './components/task-footer/task-footer.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskButtonComponent } from './components/task-button/task-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TaskHeaderComponent,
    TaskListComponent,
    TaskFooterComponent,
    TaskFormComponent,
    TaskButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
