import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'professional-experience',
        loadChildren: () => import('./features/professional-experience/professional-experience.module').then(m => m.ProfessionalExperienceModule)
    },
    {
        path: 'education',
        loadChildren: () => import('./features/education/education.module').then(m => m.EducationModule)
    },
    {
        path: 'skills',
        loadChildren: () => import('./features/skills/skills.module').then(m => m.SkillsModule)
    },
    {
        path: 'projects',
        loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule)
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

const config: ExtraOptions = {
    anchorScrolling: 'enabled',
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
