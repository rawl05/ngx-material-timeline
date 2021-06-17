import { TestBed } from '@angular/core/testing';

import { NgxMaterialTimelineService } from './ngx-material-timeline.service';

describe('NgxMaterialTimelineService', () => {
  let service: NgxMaterialTimelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialTimelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
