import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialTimelineComponent } from './ngx-material-timeline.component';

describe('NgxMaterialTimelineComponent', () => {
  let component: NgxMaterialTimelineComponent;
  let fixture: ComponentFixture<NgxMaterialTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
