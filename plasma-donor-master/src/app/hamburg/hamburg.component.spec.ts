import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgComponent } from './hamburg.component';

describe('HamburgComponent', () => {
  let component: HamburgComponent;
  let fixture: ComponentFixture<HamburgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
