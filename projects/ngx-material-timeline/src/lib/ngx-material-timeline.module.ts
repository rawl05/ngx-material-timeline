import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaterialTimelineComponent } from './ngx-material-timeline.component';
import { MaterialModule } from './common/modules/material/material.module';
import { TimecardComponent } from './childComponents/timecard/timecard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [NgxMaterialTimelineComponent, TimecardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [NgxMaterialTimelineComponent]
})
export class NgxMaterialTimelineModule { }
