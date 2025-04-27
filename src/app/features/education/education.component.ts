import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BadgeService } from '../../services/badge.service';

@Component({
  selector: 'app-education',
  imports: [
    TranslateModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIcon,
    CommonModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  loading = true;
  badgesContent = false;
  badges: any[] = [];
  educations = [
    { title: 'EDUCATION-1-TITLE', institution: 'EDUCATION-1-INSTITUTION', period: 'EDUCATION-1-PERIOD', theme: 'EDUCATION-1-THEME', image: '/unifei-logo.png' },
    { title: 'EDUCATION-2-TITLE', institution: 'EDUCATION-2-INSTITUTION', period: 'EDUCATION-2-PERIOD', theme: 'EDUCATION-2-THEME', image: '/unifei-logo.png' },
  ];

  constructor(
    private translate: TranslateService,
    private badgeService: BadgeService
  ) {}

  ngOnInit(): void {
    this.loadBadges();
    // adicionar campo url para cada badge
    this.badges.forEach((badge: any) => {
      badge.url = this.generateBadgeUrl(badge);
    });
    this.badges.splice( 2, 0,{
      id: 'd6f4e00c-57a8-4d3e-aceb-1cb908007524',
      image_url: '/icons/badge_apollo.svg',
      badge_template: {
        name: 'Graph Developer - Associate',
        issuer: {
          entities: [
            { entity: { name: 'Apollo GraphQL' } }
          ]
        },
      },
      issued_at_date: '2022-01-04T00:00:00Z',
      url: 'https://www.apollographql.com/tutorials/certifications/d6f4e00c-57a8-4d3e-aceb-1cb908007524',
    });
  }

  async loadBadges() {
    this.loading = true;
    console.log(await this.badgeService.getBadges());

    await this.badgeService.getBadges().then((badges: any) => {
      this.badges = badges.data;
      this.loading = false;
      this.badgesContent = true;
    });
  }

  generateBadgeUrl(badge: any) {
    let url = `https://www.credly.com/badges/${badge.id}/embed`;
    return url;
  }

  openBadge(badge: any) {
    window.open(badge.url, '_blank');
  }

}
