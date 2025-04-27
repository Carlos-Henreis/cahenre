import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableBlurMaskComponent } from './draggable-blur-mask.component';

describe('DraggableBlurMaskComponent', () => {
  let component: DraggableBlurMaskComponent;
  let fixture: ComponentFixture<DraggableBlurMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraggableBlurMaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraggableBlurMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
