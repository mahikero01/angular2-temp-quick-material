import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonFormComponent } from './person-form.component';

const personRoutes: Routes = [
    { path: 'persons', component: PersonFormComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(personRoutes) ],
    exports: [ RouterModule ]
})

export class PersonsRouting{}