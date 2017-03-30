import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-title',
    template: `
        <h1 class="title">App title component</h1>
    `
})
export class TitleComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}

