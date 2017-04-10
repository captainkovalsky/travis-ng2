import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test.component';


const COMPONENTS = [
];

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    declarations: [
        TestComponent
    ]
})
export class ProductsModule {
    // static forRoot(bazString: string): ModuleWithProviders {
    //     return {
    //         ngModule: ProductsModule,
    //         providers: [

    //         ]
    //     };
    // }

    // constructor( @Optional() @SkipSelf() parentModule: ProductsModule) {
    //     if (parentModule) {
    //         throw new Error(
    //             'ProductsModule is already loaded. Import it in the AppModule only');
    //     }
    // }
}
