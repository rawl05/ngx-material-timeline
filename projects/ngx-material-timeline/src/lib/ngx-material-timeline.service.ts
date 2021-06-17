import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxMaterialTimelineService {

  constructor() { }

  customPredicateFilterForTables(colArray, filter) {
    const totalWords = filter.split(' ');
    for (const col of colArray) {
      let count = 0;
      for (const word of totalWords) {
        if ((col !== ''  && col.toString().toLowerCase().includes(word))) {
          ++count;
          if (count === totalWords.length) {
            return true;
          }
        }
      }
    }
  }
}
