import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
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
  dialOpen = false;

  constructor(
    private renderer: Renderer2,
    private translate: TranslateService,
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

  trocarIdioma(language: string): void {
    this.translate.use(language);
  }

  scrollToTop(): void {
    this.scrollElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.dialOpen = !this.dialOpen;
  }

  ngOnDestroy(): void {
    if (this.scrollListener) this.scrollListener();
  }

  toggleDial() {
    this.dialOpen = !this.dialOpen;
  }
  
  toggleMenu() {
    this.toggleSidenav.emit();
    this.dialOpen = false;
  }

  get tooltipTextoMenu(): string {
    return this.sidenavOpened
      ? this.translate.instant('CLOSE-MENU')
      : this.translate.instant('OPEN-MENU');
  }

}
