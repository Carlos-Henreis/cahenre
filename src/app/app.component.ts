import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
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

  sidenavOpened = true;
  title = 'cahenre-portifolio';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private translate: TranslateService,
    public screen: ScreenService
  ) {
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
  }

  ngOnInit(): void {;
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }
  
  onSidenavChanged(opened: boolean): void {
    this.sidenavOpened = opened;
  }
  
}
