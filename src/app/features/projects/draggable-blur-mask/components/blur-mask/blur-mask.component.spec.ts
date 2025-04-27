import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurMaskComponent } from './blur-mask.component';

describe('BlurMaskComponent', () => {
  let component: BlurMaskComponent;
  let fixture: ComponentFixture<BlurMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlurMaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
