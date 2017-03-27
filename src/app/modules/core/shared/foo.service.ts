import { Injectable } from "@angular/core";

@Injectable()
export class FooService {
    private config: string;
    constructor(configStr = 'prod config') {
        this.config = configStr;
    }

    public baz(): string {
        return this.config;
    }
}
