import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloLattineComponent } from './ciclo-lattine.component';

describe('CicloLattineComponent', () => {
  let component: CicloLattineComponent;
  let fixture: ComponentFixture<CicloLattineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloLattineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloLattineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
