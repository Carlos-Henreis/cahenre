import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

import { TranslateModule } from '@ngx-translate/core';
import { ScreenService } from '../../services/screen.service';


@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule,
    MatMenuModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true
})
export class MenuComponent {

  @Input() scrollTargetId = 'matSidenavContent';
  @Input() sidenavOpened = false;
  @Output() toggleSidenav = new EventEmitter<void>();

  showButtonScrollTop = false;
  private scrollElement!: HTMLElement;
  private scrollListener: (() => void) | undefined;

  constructor(
    private renderer: Renderer2,
    public screen: ScreenService
  ) {}

  ngOnInit(): void {
      if (typeof document !== 'undefined') {
      const el = document.getElementById(this.scrollTargetId);
      if (el) {
        this.scrollElement = el;
        this.scrollListener = this.renderer.listen(this.scrollElement, 'scroll', () => {
          this.showButtonScrollTop = this.scrollElement.scrollTop > 100;
        });
      }
    }
  }

  scrollToTop(): void {
    this.scrollElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnDestroy(): void {
    if (this.scrollListener) this.scrollListener();
  }

 
  
  toggleMenu() {
    this.toggleSidenav.emit();
  }

}
