## About

Angular library for timeline feature. This library includes various customisations for timeline feature in angular.

Timeline consist of timecards and each timecard can be customized.

This library works only with [Angular Material](https://material.angular.io/).

## Demo

[Working Demo](https://ngx-material-timeline.stackblitz.io)

[Hands On Demo](https://stackblitz.com/edit/ngx-material-timeline?file=src/app/app.component.ts)

## Installation
```sh
npm install ngx-material-timeline
```

## Usage

Import the NgxMaterialTimelineModule in your app.module.ts file of your angular application.

```javascript

import { NgxMaterialTimelineModule } from 'ngx-material-timeline';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    NgxMaterialTimelineModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Now you can use the <ngx-material-timeline> selector in html file as required.

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <ngx-material-timeline
          [timeline]='timelineArray'
          [addTimecard]='true'
          [addTimecardPosition]='"bottom"'
          [enableFilter]='true'
          (actionEvent)='captureEvent($event)'>
        </ngx-material-timeline>
    </body>
</html>
```

In style.scss import the material theme.
```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

Setting up Global options for ngx-material-timeline selector.
#### Inputs[]

Option | Type | Default | Description
---------- | --------- | --------- | -------------------
timeline | array | [] | Array of timecards to be displayed in timeline.
addTimecard | boolean | false | Display the add timeline button at the bottom of the timeline.
addTimecardPosition | string | bottom | Display the add timeline button at the bottom of the timeline.
expandAll | boolean | false | Expand descriptions of all the timecards.
enableFilter | boolean | true | Enable the filter option to filter timecards in timeline.
defaultTheme | string | #004c88 | Default theme color for timeline. Accepts hex value or any color format.

#### Output()

Option | Description
---------- | -------------------
actionEvent | Event Emmiter for various event from timecards and timeline.

Following will help you understand the event types.

Event | EventType | Description
---------- | --------- | -------------------
actionEvent | floatingIconClick | Event emmiter for click on floating icon in timecard.
actionEvent | timecardIconClick | Event emmiter for click on timecard icon in timeline.
actionEvent | timecardClosed | Event emmiter for close of particular timecard descripion.
actionEvent | timecardOpened | Event emmiter for open of particular timecard descripion.
actionEvent | addtimecardClick | Event emmiter for add timecard button.

#### Timecard Model

```javascript
{
    index = 0,  // timecard index
    title = '', // timecard title
    description = '', // timecard description
    timestamp = '', // timecard timestamp
    align = '', // time alignment
    timecardIcon = '', // timecard icon
    timecardIconColor = '', // timecard icon color
    timecardFloatingIcon = '', // timecard floating icon
    timecardFloatingIconColor = '', // timecard floating icon color
    timecardColor = '', // timecard color
    timecardTitleColor = '', // timecard title color
    timecardTextColor = '', // timecard description and timestamp color
}
```

Option | Type | Default | Description
---------- | --------- | --------- | -------------------
index | number | auto-increment | Timecard index (Auto-increment if not provided.)
title | string | '' | Timecard title.
description | string | '' | Timecard description.
timestamp | string | '' | Timecard timestamp.
align | string | '' | Align timecards. Accepts: left, right
timecardIcon | string | '' | Icon for timecard. Accepts Google Mat Icons.
timecardIconColor | string | defaultThemeColor | Color for timecard icon. Accepts hex value or any color format.
timecardFloatingIcon | string | '' | Floating icon for timecard. Accepts Google Mat Icons.
timecardFloatingIconColor | string | defaultThemeColor | Color for floating icon. Accepts hex value or any color format.
timecardColor | string | defaultThemeColor | Color for timecard. Accepts hex value or any color format.
timecardTitleColor | string | white | Color for timecard title. Accepts hex value or any color format.
timecardTextColor | string | black | Color for timecard description and timestamp. Accepts hex value or any color format.



## License

MIT
 ## Help and Support

[GitHub](https://github.com/rawl05/ngx-material-timeline)



