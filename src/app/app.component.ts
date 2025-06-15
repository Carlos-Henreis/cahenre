import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateService } from '@ngx-translate/core';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import localeEN from '@angular/common/locales/en';
import { ScreenService } from './services/screen.service';
import { Meta, Title } from '@angular/platform-browser';
registerLocaleData(localePT);
registerLocaleData(localeEN);

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule,
    HeaderComponent,
    MatSlideToggleModule,
    MenuComponent,
    MatButtonModule
],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav

  sidenavOpened = false;
  title = 'cahenre-portifolio';

  constructor(
    private translate: TranslateService,
    public screen: ScreenService,
    private titleService: Title, 
    private metaService: Meta
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.titleService.setTitle('Personal Portfolio - Carlos Henrique Reis');

    this.metaService.updateTag({
      name: 'description',
      content: "Hello, my name is Carlos Henrique Reis and I am a software developer passionate about technology and innovation. I have experience in software development, cloud solutions architecture, and technical leadership."
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Backend Developer, Personal Portfolio, Carlos Henrique Reis, Software Engineer, Web Developer, Cloud Solutions Architect'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Personal Portfolio - Carlos Henrique Reis'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Hello, my name is Carlos Henrique Reis and I am a software developer passionate about technology and innovation. I have experience in software development, cloud solutions architecture, and technical leadership.'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://cahenre.com.br/profile-1.jpg'
    });
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }
  
  onSidenavChanged(opened: boolean): void {
    this.sidenavOpened = opened;
  }
  
}
