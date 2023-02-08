import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LattinaWatermelonComponent } from './lattina-watermelon.component';

describe('LattinaWatermelonComponent', () => {
  let component: LattinaWatermelonComponent;
  let fixture: ComponentFixture<LattinaWatermelonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LattinaWatermelonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LattinaWatermelonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
