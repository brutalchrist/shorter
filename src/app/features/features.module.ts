import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../pipes/pipes.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
/**
* Especificamos el modulo
*/

@NgModule({
    imports: [CommonModule, RouterModule, SharedModule, PipesModule],
    declarations: [HomeComponent, IndexComponent],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HomeComponent,
        IndexComponent
    ]
})

export class FeaturesModule {
}
