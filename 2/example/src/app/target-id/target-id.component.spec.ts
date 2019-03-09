import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetIdComponent } from './target-id.component';

describe('TargetIdComponent', () => {
  let component: TargetIdComponent;
  let fixture: ComponentFixture<TargetIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
