import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScreenService } from '../../services/screen.service';
import { MatDialog } from '@angular/material/dialog';
import { ChangeLanguageComponent } from '../dialog/change-language/change-language.component';


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
    TranslateModule,
    MatMenuModule
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
    private translate: TranslateService,
    private dialog: MatDialog,
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

  fecharHeader(): void {
    if (!this.screen.isDesktop()) {
      this.toggleSidenav.emit();
    }
  }

  trocarIdioma(language: string): void {
    this.translate.use(language);
  }

  openChangeLanguageDialog(): void {
    document.activeElement instanceof HTMLElement && document.activeElement.blur();
    const dialogRef = this.dialog.open(ChangeLanguageComponent, {
      width: '300px',
      data: { language: this.translate.currentLang }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trocarIdioma(result);
      }
    });
  }

}
