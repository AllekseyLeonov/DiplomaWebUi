import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryPageComponent } from './theory-page.component';

describe('TheoryPageComponent', () => {
  let component: TheoryPageComponent;
  let fixture: ComponentFixture<TheoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
