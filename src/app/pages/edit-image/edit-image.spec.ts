import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImage } from './edit-image';

describe('EditImage', () => {
  let component: EditImage;
  let fixture: ComponentFixture<EditImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditImage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
