import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';


@NgModule({
  declarations: [],
  imports: [
    SkillsComponent,
    CommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
