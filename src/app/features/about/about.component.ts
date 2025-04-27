import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    MatDividerModule,
    MatListModule,
    MatIcon,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
})
export class AboutComponent {

  info = [
    { label: 'ABOUT-FORMATION', value: 'ABOUT-FORMATION-INFO' },
    { label: 'ABOUT-GRADUATION', value: 'ABOUT-GRADUATION-INFO' },
    { label: 'ABOUT-ATUALLY-WORK', value: 'ABOUT-ATUALLY-WORK-INFO' },
    { label: 'ABOUT-EXPERIENCE', value: 'ABOUT-EXPERIENCE-INFO' },
    { label: 'ABOUT-CURRENT-INTERESTS', value: 'ABOUT-CURRENT-INTERESTS-INFO' },
    { label: 'ABOUT-HOBBIES', value: 'ABOUT-HOBBIES-INFO' }
  ];

  constructor(private translate: TranslateService) {}
}
