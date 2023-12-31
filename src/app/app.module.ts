import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TodoComponent,
    TodoItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
