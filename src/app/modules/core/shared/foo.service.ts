import { Injectable, OpaqueToken, Inject } from "@angular/core";

export let EMAIL_REGEX = new RegExp(/\S+@\S+\.\S+/);

@Injectable()
export class FooService {
    private config: string;
    constructor( @Inject(CONFIG) configStr: string = 'prod config') {
        this.config = configStr;
    }

    public baz(): string {
        return this.config;
    }
}
export const CONFIG = new OpaqueToken('FooServiceConfig');
