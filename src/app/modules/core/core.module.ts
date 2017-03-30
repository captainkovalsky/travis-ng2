import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { FooService, CONFIG } from "./shared/foo.service";
import { TitleComponent } from "./shared/components/title.component";


const COMPONENTS = [
    TitleComponent
];

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
                    provide: CONFIG,
                    useValue: bazString
                },
                {
                    provide: FooService,
                    useClass: FooService,
                    deps: [CONFIG]
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
