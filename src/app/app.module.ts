import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from '@vdzundza/core_blog';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './modules/products/products.module';

const routes: Routes = [
    {
        path: 'lazy',
        // loadChildren: '@vdzundza/products_blog/products.module#ProductsModule'
        loadChildren: './modules/products/products.module#ProductsModule'
    }

];
@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot('configure me'),
        ProductsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
