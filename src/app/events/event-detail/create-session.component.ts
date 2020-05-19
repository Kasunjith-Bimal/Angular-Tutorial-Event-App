import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISession, restricedWords, IEvent } from '../shared';

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles : [`
    em {float:right;color : #E05C65;padding-left:10px;}

    .error input {background-color: #E3C3C5;}
  
    `] 
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter<ISession>();
    @Output() cancelSession = new EventEmitter();
    public newSessionForm :FormGroup
    public name:FormControl
    public presenter :FormControl
    public duration :FormControl
    public level:FormControl
    public abstract:FormControl

    constructor() { }

    ngOnInit() { 
        this.name = new FormControl('',Validators.required)
        this.presenter = new FormControl('',Validators.required)
        this.duration = new FormControl('',Validators.required)
        this.level = new FormControl('',Validators.required)
        this.abstract = new FormControl('',[Validators.required,Validators.maxLength(400),restricedWords(['foo','bar'])])

        this.newSessionForm = new FormGroup({

            name: this.name,
            presenter : this.presenter,
            duration : this.duration,
            level : this.level,
            abstract : this.abstract

        });
    }

    saveSeesion(formValue){
        console.log(formValue);
        let session : ISession = {
            id : undefined,
            name : formValue.name,
            duration : + formValue.duration,
            level : formValue.level,
            presenter :  formValue.presenter,
            abstract : formValue.abstract,
            voters: []

        }
        console.log(session);
        this.saveNewSession.emit(session);

        
    }

    cancel(){
        this.cancelSession.emit();
    }

  

}