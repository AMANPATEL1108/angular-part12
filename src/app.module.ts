import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './app/components/user-list/user-list';
import { UserFormComponent } from './app/components/user-form/user-form';
import { App } from './app/app';
import { AppRoutingModule, routes } from './app/app.routes';

@NgModule({
  /*  👉 NO declarations array needed for stand‑alone  */
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    UserListComponent,
    UserFormComponent,
  ],
  bootstrap: [AppModule],
})
export class AppModule {}
