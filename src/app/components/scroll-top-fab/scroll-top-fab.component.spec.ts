import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTopFabComponent } from './scroll-top-fab.component';

describe('ScrollTopFabComponent', () => {
  let component: ScrollTopFabComponent;
  let fixture: ComponentFixture<ScrollTopFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollTopFabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollTopFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
