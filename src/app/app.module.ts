import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {

  EventsListComponent,
  EventThumbnailComponent,
  EventDetailComponent,
  EventCreateComponent,
  EventService,
  EventRouterActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'
import {  EventAppComponent } from './events-app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { TOASTR_TOKEN, Toastr,CollapsibleWellComponent,JQ_TOKEN,ModalTriggerDirectiove,SimpleModalComponent} from './common/index';

import { RouterModule } from '@angular/router';
import { routes } from './app.route';

import { Error404Component } from './error/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




  let toastr:Toastr = window['toastr'];
  let JQuery = window['$'];

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    EventCreateComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    ModalTriggerDirectiove,
    SimpleModalComponent,
    DurationPipe,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventService,
    {provide:TOASTR_TOKEN,useValue:toastr},
    {provide:JQ_TOKEN,useValue:JQuery},
    EventRouterActivator,
    EventListResolver,
    AuthService,
    {provide:'canDeactivateEvent',useValue:checkDirtyState}
    
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }

export function checkDirtyState(component :EventCreateComponent){
if(component.isDirty){
  return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true;
}