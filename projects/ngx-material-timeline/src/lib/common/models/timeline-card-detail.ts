export class TimelineCardModel {
    index: number;
    title: string;
    description: string;
    timestamp: string;
    align: string;
    timecardIcon: string;
    timecardIconColor: string;
    timecardFloatingIcon: string;
    timecardFloatingIconColor: string;
    timecardColor: string;
    timecardTitleColor: string;
    timecardTextColor: string;

    constructor(
        index = 0,
        title = '',
        description = '',
        timestamp = '',
        align = '',
        timecardIcon = '',
        timecardIconColor = '',
        timecardFloatingIcon = '',
        timecardFloatingIconColor = '',
        timecardColor = '',
        timecardTitleColor = '',
        timecardTextColor = '',
    ) {
        this.index = index;
        this.title = title;
        this.description = description;
        this.timestamp = timestamp;
        this.align = align;
        this.timecardIcon = timecardIcon;
        this.timecardIconColor = timecardIconColor;
        this.timecardFloatingIcon = timecardFloatingIcon;
        this.timecardFloatingIconColor = timecardFloatingIconColor;
        this.timecardColor = timecardColor;
        this.timecardTitleColor = timecardTitleColor;
        this.timecardTextColor = timecardTextColor;
    }
}
