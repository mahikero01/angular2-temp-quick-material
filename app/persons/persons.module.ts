import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { PersonFormComponent } from './person-form.component';

import { PersonsRouting } from './persons.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        PersonsRouting
    ],
    declarations: [
        PersonFormComponent
    ]
})

export class PersonModule{}