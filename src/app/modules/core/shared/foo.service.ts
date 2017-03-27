import { Injectable } from "@angular/core";

@Injectable()
export class FooService {
    constructor() { }

    public baz(): string {
        return 'test string';
    }
}
