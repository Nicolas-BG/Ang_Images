import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outro } from './outro';

describe('Outro', () => {
  let component: Outro;
  let fixture: ComponentFixture<Outro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Outro],
    }).compileComponents();

    fixture = TestBed.createComponent(Outro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
