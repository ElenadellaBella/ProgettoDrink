import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollSnapComponent } from './scroll-snap.component';

describe('ScrollSnapComponent', () => {
  let component: ScrollSnapComponent;
  let fixture: ComponentFixture<ScrollSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollSnapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
