import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { FooService } from "./shared/foo.service";

export function FooFactory(bazString: string) {
    return new FooService(bazString);
}

@NgModule({
    imports: [],
    declarations: [],
    bootstrap: []
})
export class CoreModule {
    static forRoot(bazString: string): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                {
                    provide: FooService, useValue: FooFactory(bazString)
                }
            ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

}
