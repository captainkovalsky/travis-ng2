import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test.component';

const productsRoutes: Routes = [
    { path: 'heroes', component: TestComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(productsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule { }
