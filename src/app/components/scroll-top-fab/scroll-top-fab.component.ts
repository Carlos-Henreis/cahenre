import { Component, HostListener, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-scroll-top-fab',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './scroll-top-fab.component.html',
  styleUrl: './scroll-top-fab.component.scss'
})
export class ScrollTopFabComponent {
  @Input() scrollTargetId = 'matSidenavContent';
  showButton = false;
  private scrollElement!: HTMLElement;
  private scrollListener: (() => void) | undefined;

  constructor(private renderer: Renderer2) {
    console.log('ScrollTopFabComponent initialized');
  }

  
}
