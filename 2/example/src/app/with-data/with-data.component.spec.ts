import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDataComponent } from './with-data.component';

describe('WithDataComponent', () => {
  let component: WithDataComponent;
  let fixture: ComponentFixture<WithDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
