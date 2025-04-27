import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  imports: [
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {

  @ViewChild('typedText', { static: true }) typedTextEl!: ElementRef;
  typed?: Typed;

  constructor(private translate: TranslateService) {}

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.loadTypedStrings();

      this.translate.onLangChange.subscribe(() => {
        this.loadTypedStrings();
      });
    }
  }

  startTyped(frases: string[]) {
    if (this.typed) {
      this.typed.destroy();
    }
  
    this.typed = new Typed(this.typedTextEl.nativeElement, {
      strings: frases,
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
      smartBackspace: true
    });
  }

  loadTypedStrings() {
    this.translate.get([
      "WEB-DEV",
      "COMPUTER-SCIENTIST",
      "TECH-LEAD",
      "CLOUD-SOLUTIONS-ARCHITECT",
      "BACKEND-DEV"
    ]).subscribe(translations => {
      const frases = [
        translations["WEB-DEV"],
        translations["COMPUTER-SCIENTIST"],
        translations["TECH-LEAD"],
        translations["CLOUD-SOLUTIONS-ARCHITECT"],
        translations["BACKEND-DEV"]
      ];
      this.startTyped(frases);
    });
  }

}
