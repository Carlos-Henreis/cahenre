import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { IndexComponent } from './index/index.component';
import { DraggableBlurMaskComponent } from './draggable-blur-mask/draggable-blur-mask.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'draggable-blur-mask', component: DraggableBlurMaskComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }