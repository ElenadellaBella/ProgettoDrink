import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LattinaPineappleComponent } from './lattina-pineapple.component';

describe('LattinaPineappleComponent', () => {
  let component: LattinaPineappleComponent;
  let fixture: ComponentFixture<LattinaPineappleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LattinaPineappleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LattinaPineappleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
