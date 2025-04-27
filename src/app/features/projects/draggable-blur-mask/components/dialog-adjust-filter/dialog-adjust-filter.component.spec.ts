import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdjustFilterComponent } from './dialog-adjust-filter.component';

describe('DialogAdjustFilterComponent', () => {
  let component: DialogAdjustFilterComponent;
  let fixture: ComponentFixture<DialogAdjustFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAdjustFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAdjustFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
