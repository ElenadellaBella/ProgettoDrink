import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LattinaCardComponent } from './carousel.component';

describe('LattinaCardComponent', () => {
  let component: LattinaCardComponent;
  let fixture: ComponentFixture<LattinaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LattinaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LattinaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
