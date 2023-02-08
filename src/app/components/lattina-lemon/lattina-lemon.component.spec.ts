import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LattinaLemonComponent } from './lattina-lemon.component';

describe('LattinaLemonComponent', () => {
  let component: LattinaLemonComponent;
  let fixture: ComponentFixture<LattinaLemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LattinaLemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LattinaLemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
