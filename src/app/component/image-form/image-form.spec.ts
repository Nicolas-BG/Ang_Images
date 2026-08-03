import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageForm } from './image-form';

describe('ImageForm', () => {
  let component: ImageForm;
  let fixture: ComponentFixture<ImageForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
