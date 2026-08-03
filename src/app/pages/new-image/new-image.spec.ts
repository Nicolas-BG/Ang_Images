import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewImage } from './new-image';

describe('NewImage', () => {
  let component: NewImage;
  let fixture: ComponentFixture<NewImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewImage],
    }).compileComponents();

    fixture = TestBed.createComponent(NewImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
