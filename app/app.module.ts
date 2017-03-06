import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PersonModule } from './persons/persons.module';

import { AppRouting } from './app.routing';



@NgModule({
    imports: [BrowserModule, PersonModule, AppRouting],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}