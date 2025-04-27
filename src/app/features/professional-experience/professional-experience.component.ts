import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-professional-experience',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    TranslateModule
  ],
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.scss'
})
export class ProfessionalExperienceComponent implements OnInit {

  experiences: any[] = [];

  constructor(private translate: TranslateService) {}

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.experiences = this.buildExperiences();

      this.translate.onLangChange.subscribe(() => {
        this.experiences = this.buildExperiences();
      });
    }
  }

  ngOnInit(): void {
    this.experiences = this.buildExperiences();
  }

  buildExperiences(): any[] {
    return [
      this.createExperience(1),
      this.createExperience(2),
      this.createExperience(3),
      this.createExperience(4),
      this.createExperience(5),
      this.createExperience(6),
      this.createExperience(7),
      this.createExperience(8),
    ];
  }

  createExperience(index: number): any {
    return {
      position: `EXPERIENCE-${index}-POSITION`,
      company: `EXPERIENCE-${index}-COMPANY`,
      period: `EXPERIENCE-${index}-PERIOD`,
      product: `EXPERIENCE-${index}-PRODUCT`,
      description: `EXPERIENCE-${index}-DESCRIPTION`,
      technologies: this.getExperienceTechnologies(index),
    };
  }

  getExperienceTechnologies(index: number): string[] {
    const raw = this.translate.instant(`EXPERIENCE-${index}-TECHNOLOGY`);
    return raw.split(',').map((tech: string) => tech.trim());
  }
}
