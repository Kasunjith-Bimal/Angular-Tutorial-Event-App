import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
  <app-navbar></app-navbar>
  <router-outlet> </router-outlet>
  `

})
export class EventAppComponent {
  title = 'Data';
}
