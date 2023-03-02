import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinComponent } from './tin.component';

describe('TinComponent', () => {
  let component: TinComponent;
  let fixture: ComponentFixture<TinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
