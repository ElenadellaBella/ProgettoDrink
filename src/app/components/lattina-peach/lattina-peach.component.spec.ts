import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LattinaPeachComponent } from './lattina-peach.component';

describe('LattinaPeachComponent', () => {
  let component: LattinaPeachComponent;
  let fixture: ComponentFixture<LattinaPeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LattinaPeachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LattinaPeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
