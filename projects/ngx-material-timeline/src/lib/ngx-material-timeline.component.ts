import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { TimelineCardModel } from './common/models/timeline-card-detail';
import { NgxMaterialTimelineService } from './ngx-material-timeline.service';

@Component({
  selector: 'ngx-material-timeline',
  templateUrl: './ngx-material-timeline.component.html',
  styleUrls: ['./ngx-material-timeline.component.scss']
})
export class NgxMaterialTimelineComponent implements OnInit {

  get timeline(): any {
    return this.timelineArray;
  }
  @Input('timeline')
  set timeline(value: any) {
    this.timelineArray = value;
  }

  get addTimecard(): boolean {
    return this.addTimecardEnable;
  }
  @Input('addTimecard')
  set addTimecard(value: boolean) {
    this.addTimecardEnable = value;
  }

  get expandAll(): boolean {
    return this.isExpandAll;
  }
  @Input('expandAll')
  set expandAll(value: boolean) {
    this.isExpandAll = value;
  }

  get enableFilter(): boolean {
    return this.isFilterEnabled;
  }
  @Input('enableFilter')
  set enableFilter(value: boolean) {
    this.isFilterEnabled = value;
  }

  get defaultTheme(): string {
    return this.defaultThemeColor;
  }
  @Input('defaultTheme')
  set defaultTheme(value: string) {
    this.defaultThemeColor = value;
  }

  @Output() actionEvent = new EventEmitter<any>();

  timelineArray: Array<TimelineCardModel>;
  filteredTimelineArray: Array<TimelineCardModel>;

  addTimecardEnable = false;
  isExpandAll = false;
  isFilterEnabled = true;
  screenWidth: number;
  defaultThemeColor = '#004c88';

  constructor(
    private timelineService: NgxMaterialTimelineService
  ) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.filteredTimelineArray = [];
    this.timelineArray.forEach((timecard, index) => {
      const timecardObj = new TimelineCardModel(
        timecard.index ? timecard.index : index,
        timecard.title,
        timecard.description,
        timecard.timestamp,
        timecard.align,
        timecard.timecardIcon,
        timecard.timecardIconColor,
        timecard.timecardFloatingIcon,
        timecard.timecardFloatingIconColor,
        timecard.timecardColor,
        timecard.timecardTitleColor,
        timecard.timecardTextColor
        );
      this.filteredTimelineArray.push(timecardObj);
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = event.target.innerWidth;
  }

  applyFilter(filter) {
    if (filter) {
      this.filteredTimelineArray = [];
      this.timeline.forEach(timelineCard => {
        // tslint:disable-next-line: max-line-length
        if (this.timelineService.customPredicateFilterForTables([timelineCard.title, timelineCard.description, timelineCard.timestamp], filter.toLowerCase())) {
          this.filteredTimelineArray.push(timelineCard);
        }
      });
    } else {
      this.filteredTimelineArray = this.timeline;
    }
  }

  addTimecardEvent(event) {
    this.triggerEvent({eventType: 'addTimecardClick', data: {}, event});
  }

  triggerEvent(event) {
    this.actionEvent.emit(event);
  }


}
