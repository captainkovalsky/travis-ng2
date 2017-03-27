import { Component } from '@angular/core';
import { FooService } from "@vdzundza/core_blog";

import '../assets/css/styles.css';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FooService]
})
export class AppComponent {
    public baz: string = '';
    constructor(private foo: FooService) {
        this.baz = foo.baz();
    }
}
