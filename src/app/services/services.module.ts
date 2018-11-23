import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RestService } from './rest/rest.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [],
    providers: [RestService],
    exports: [CommonModule, FormsModule, RouterModule]
})

export class ServicesModule {
}
