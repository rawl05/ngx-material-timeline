import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaterialTimelineModule } from '../../../ngx-material-timeline/src/lib/ngx-material-timeline.module';
// import { NgxMaterialTimelineModule } from '../../../../dist/ngx-material-timeline';
// import { NgxMaterialTimelineModule } from 'ngx-material-timeline';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMaterialTimelineModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
