import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Session } from 'protractor';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html',
    styles : [`
    .active{
     background-color:'blcak';
     color : 'white';
    }
    
    `]
    
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]; 
    @Input() filterBy: string; 
    @Input() sortBy: string;
    visibleSessions : ISession[]= [];
    constructor() { }
    ngOnChanges() {
        debugger;
       if(this.sessions){
          this.filterSessions(this.filterBy);
          this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc): this.visibleSessions.sort(sortByVoteDesc)
       }
    }
    
    filterSessions(filter){
        debugger;
        if(filter == 'all'){
         this.visibleSessions = this.sessions.slice(0);
        }else{
          this.visibleSessions = this.sessions.filter(session => {
            return session.level.toLowerCase() === filter;

          })  
        }
    }
   
}

function sortByNameAsc(S1: ISession,S2:ISession){
 if(S1.name > S2.name) return 1
 else if(S1.name === S2.name) return 0
 else return -1
}

function sortByVoteDesc(S1: ISession,S2:ISession){
    return S2.voters.length - S1.voters.length;
   }