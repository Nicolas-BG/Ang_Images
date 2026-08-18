import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualImg } from './individual-img';

describe('IndividualImg', () => {
  let component: IndividualImg;
  let fixture: ComponentFixture<IndividualImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualImg],
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualImg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
