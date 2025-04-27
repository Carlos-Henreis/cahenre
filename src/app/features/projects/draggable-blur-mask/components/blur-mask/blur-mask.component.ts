import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'blur-mask',
  imports: [CommonModule],
  templateUrl: './blur-mask.component.html',
  styleUrl: './blur-mask.component.scss',
  standalone: true,
})
export class BlurMaskComponent {
  @Input() wrapper!: HTMLElement;
  @Input() blur = 14;
  @Input() diameter = 160;
  @Input() borderRadius = 100;
  @Input() newImage = 1;

  @ViewChild('maskRef') maskRef!: ElementRef<HTMLDivElement>;
  
  position = { x: 0, y: 0 };
  dragging = false;
  @Output() posEmitter = new EventEmitter<{ x: number; y: number }>();

  ngOnInit() {
    this.setCenter();
  }

  ngAfterViewInit() {
    const element = this.maskRef.nativeElement;

    element.addEventListener('touchstart', this.startDragTouch.bind(this), { passive: false });
    element.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
    element.addEventListener('touchend', this.stopDragTouch.bind(this), { passive: false });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newImage']) {

      this.setCenter();
    }
  }

  //with mouse
  startDragMouse(event: MouseEvent) {
    this.initDragging();
  }

  stopDragMouse() {
    this.stopDragging();
  }

  onMouseMove(event: MouseEvent) {
    this.move(event.clientX, event.clientY);
  }

  //with touch
  startDragTouch(event: TouchEvent) {
    this.initDragging();
  }

  stopDragTouch() {
    this.stopDragging();
  }
  onTouchMove(event: TouchEvent) {
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      this.move(touch.clientX, touch.clientY);
    }
  }

  @HostListener('window:keydown', ['$event'])
  moveWithKeyDown(event: KeyboardEvent) {
    const step = 10;
    switch (event.key) {
      case 'ArrowUp':
        this.position.y = Math.max(this.position.y - step, 0);
        break;
      case 'w':
        this.position.y = Math.max(this.position.y - step, 0);
        break;
      case 'ArrowDown':
        this.position.y = Math.min(this.position.y + step, 400 - 50);
        break;
      case 's':
        this.position.y = Math.min(this.position.y + step, 400 - 50);
        break;
      case 'ArrowLeft':
        this.position.x = Math.max(this.position.x - step, 0);
        break;
      case 'a':
        this.position.x = Math.max(this.position.x - step, 0);
        break;
      case 'ArrowRight':
        this.position.x = Math.min(this.position.x + step, 500 - 50);
        break;
      case 'd':
        this.position.x = Math.min(this.position.x + step, 500 - 50);
        break;
    }
  }

  initDragging() {
    this.dragging = true;
  }
  stopDragging() {
    this.dragging = false;
  }

  move(clientX: number, clientY: number) {
    if (this.dragging) {
      const bounds = this.wrapper.getBoundingClientRect();
      const newX = clientX - bounds.x - this.diameter / 2;
      const newY = clientY - bounds.y - this.diameter / 2;
      const minX = 0
      const minY = 0
      const maxX = bounds.width - this.diameter;
      const maxY = bounds.height - this.diameter;
      this.position.x = Math.max(minX, Math.min(newX, maxX));
      this.position.y = Math.max(minY, Math.min(newY, maxY));
      this.posEmitter.emit(this.position);
    }
  }

  setCenter() {
    if (typeof document !== 'undefined') {
      const bounds = this.wrapper.getBoundingClientRect();
      this.position.x = (bounds.width / 2) - this.diameter / 2;
      this.position.y = (bounds.height / 2) - this.diameter / 2;
    }
  }
}