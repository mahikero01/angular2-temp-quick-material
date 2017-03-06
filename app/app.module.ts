import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PersonModule } from './persons/persons.module';



@NgModule({
    imports: [BrowserModule, PersonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}