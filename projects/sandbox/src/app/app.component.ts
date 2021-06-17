import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sandbox';
  timeline = [
    {
      title: 'Left Card Floating & Icon',
      timestamp: 'Wed, 12 May 2021 10:41:46',
      timecardIcon: 'tour',
      timecardFloatingIcon: 'warning',
      timecardColor: 'orange',
      timecardFloatingIconColor: 'orange',
      timecardIconColor: 'orange',
      align: 'left',
      description: `The ML model development 
    phase has started. This phase will consist of various projects and activities which will focus on ML model training.', themeColor: '#004c88`,
    },
    {
      title: 'Right Card Floating & Icon',
      timestamp: 'Wed, 12 May 2021 10:41:46',
      timecardIcon: 'tour',
      timecardFloatingIcon: 'error',
      // timecardColor: 'red',
      align: 'right',
      description: `The ML model development
    phase has started. This phase will consist of various projects and activities which will focus on ML model training.', themeColor: '#004c88`,
    },
    {
      title: 'Left Card No FLoating & No Icon',
      timestamp: 'Wed, 12 May 2021 10:41:46',
      timecardIcon: '',
      timecardFloatingIcon: '',
      timecardColor: 'green',
      timecardTitleColor: 'white',
      timecardTextColor: 'black',
      align: 'left',
      description: `The ML model development 
    phase has started. This phase will consist of various projects and activities which will focus on ML model training.', themeColor: '#004c88`,
    },
    {
      title: 'Right Card No FLoating & No Icon',
      timestamp: 'Wed, 12 May 2021 10:41:46',
      timecardIcon: '',
      timecardFloatingIcon: '',
      align: 'right',
      description: `The ML model development 
    phase has started. This phase will consist of various projects and activities which will focus on ML model training.', themeColor: '#004c88`,
    },
    {
      title: 'Left Card No Floating & Icon',
      timestamp: 'Wed, 12 May 2021 10:41:46',
      timecardIcon: 'tour',
      timecardFloatingIcon: '',
      align: 'left',
      description: `The ML model development 
    phase has started. This phase will consist of various projects and activities which will focus on ML model training.', themeColor: '#004c88`,
    },
    {
      title: 'Right Card No Floating & Icon',
      timestamp: 'Wed, 12 May 2021 10:41:46',
      timecardIcon: 'tour',
      timecardFloatingIcon: '',
      align: 'right',
      description: `The ML model development 
    phase has started. This phase will consist of various projects and activities which will focus on ML model training.', themeColor: '#004c88`,
    },
    {
      title: 'Left Card Floating & No Icon',
      timestamp: 'Wed, 12 May 2021 10:41:46',
      timecardIcon: '',
      timecardFloatingIcon: 'tour',
      align: 'left',
      description: `The ML model development 
    phase has started. This phase will consist of various projects and activities which will focus on ML model training.', themeColor: '#004c88`,
    },
    {
      title: 'Right Card Floating & No Icon',
      timestamp: 'Wed, 12 May 2021 10:41:46',
      timecardIcon: '',
      timecardFloatingIcon: 'tour',
      align: 'right',
      description: `The ML model development 
    phase has started. This phase will consist of various projects and activities which will focus on ML model training.', themeColor: '#004c88`,
    },
  ];

  captureEvent(event) {
    console.log(event);
  }
}
