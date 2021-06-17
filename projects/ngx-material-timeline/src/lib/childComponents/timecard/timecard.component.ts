import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimelineCardModel } from '../../common/models/timeline-card-detail';

@Component({
  selector: 'timecard',
  templateUrl: './timecard.component.html',
  styleUrls: ['./timecard.component.scss']
})
export class TimecardComponent implements OnInit {

  get timecard(): any {
    return this.timecardData;
  }
  @Input('timecard')
  set timecard(value: any) {
    this.timecardData = value;
  }

  get screenWidth(): number {
    return this.screen;
  }
  @Input('screenWidth')
  set screenWidth(value: number) {
    this.screen = value;
    this.updateWidth();
  }

  get isExpanded(): boolean {
    return this.expanded;
  }
  @Input('isExpanded')
  set isExpanded(value: boolean) {
    this.expanded = value;
  }

  get defaultTheme(): string {
    return this.defaultThemeColor;
  }
  @Input('defaultTheme')
  set defaultTheme(value: string) {
    this.defaultThemeColor = value;
  }

  @Output() actionEvent = new EventEmitter<any>();

  timecardData: TimelineCardModel;
  screen: number;
  expanded: boolean;
  defaultThemeColor: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  updateWidth() {
  }

  triggerEvent(eventType, data = {}, event) {
    this.actionEvent.emit({eventType, data, event});
  }

}
