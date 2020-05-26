import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, ISession } from '../events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchFormText : string = '';
  foundSessions : ISession[] = [];
  constructor(public authService:AuthService,private eventService : EventService) { }

  ngOnInit(): void {
  }

  searchFormSubmit(searchFormText : string){
     this.eventService.searchSessions(searchFormText).subscribe(sessions=>{
        this.foundSessions = sessions;
        console.log(this.foundSessions);
     })
  }


}
