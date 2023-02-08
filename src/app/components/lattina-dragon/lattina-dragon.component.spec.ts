import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LattinaDragonComponent } from './lattina-dragon.component';

describe('LattinaDragonComponent', () => {
  let component: LattinaDragonComponent;
  let fixture: ComponentFixture<LattinaDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LattinaDragonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LattinaDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
