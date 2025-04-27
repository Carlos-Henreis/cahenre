import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { ScreenService } from '../../services/screen.service';




@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();

  listIcons = [
    { name: 'github', href: 'icons/github.svg' },
    { name: 'linkedin', href: 'icons/linkedin.svg' },
    { name: 'medium', href: 'icons/medium.svg' },
    { name: 'lattes', href: 'icons/lattes.svg' },
    { name: 'stackoverflow', href: 'icons/stackoverflow.svg' },
    { name: 'instagram', href: 'icons/instagram.svg' }
  ];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    public screen: ScreenService
  ) {

    this.listIcons.forEach(icon => {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.href)
      );
    });
  }

  scrollTo(ancora: string) {
    if (typeof document !== 'undefined') {
      const el = document.getElementById(ancora);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      if (this.screen.isHandset()) {
        this.toggleSidenav.emit();
      }
    }
  }

}
