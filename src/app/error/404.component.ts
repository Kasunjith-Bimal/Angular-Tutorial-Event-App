import { Component, OnInit } from '@angular/core';

@Component({
    template: `
    <h1 class="errorMessage">  404'd</h1>
    `,
    styles : [`
        .errorMessage {
            fontsize : 170px;
        }
    `]
    
})

export class Error404Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}