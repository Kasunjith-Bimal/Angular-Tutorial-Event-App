import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContemt()" class="well pointable">
    <ng-content select="[well-title]"></ng-content>
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
    
    `
})

export class CollapsibleWellComponent implements OnInit {
    constructor() { }
    // @Input() title: string;
    visible :boolean = true;
    ngOnInit() { }

    toggleContemt(){
     
        this.visible = !this.visible
    }
}