import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from '@vdzundza/core_blog';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot('configure me')
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
