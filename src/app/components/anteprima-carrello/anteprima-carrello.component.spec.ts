import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteprimaCarrelloComponent } from './anteprima-carrello.component';

describe('AnteprimaCarrelloComponent', () => {
  let component: AnteprimaCarrelloComponent;
  let fixture: ComponentFixture<AnteprimaCarrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnteprimaCarrelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnteprimaCarrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
