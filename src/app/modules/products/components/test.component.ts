import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'test',
    template: `
    <p>test component</p>
    `
})

export class TestComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
