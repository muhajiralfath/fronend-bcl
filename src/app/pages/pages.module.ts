import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesRoutingModule} from "./pages-routing.module";
import { SubmissionComponent } from './submission/submission.component';



@NgModule({
    declarations: [
        SubmissionComponent
    ],
    exports: [
        SubmissionComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule
    ]
})
export class PagesModule { }
