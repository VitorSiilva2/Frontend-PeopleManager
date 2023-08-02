import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { CollaboratorReadComponent } from './views/components/collaborator/collaborator-read/collaborator-read.component';
import { CollaboratorCreateComponent } from './views/components/collaborator/collaborator-create/collaborator-create.component';
import { CollaboratorUpdateComponent } from './views/components/collaborator/collaborator-update/collaborator-update.component';
import { CollaboratorDeleteComponent } from './views/components/collaborator/collaborator-delete/collaborator-delete.component';
import { FeedbackReadComponent } from './views/components/feedback/feedback-read/feedback-read.component';
import { FeedbackReadUnitComponent } from './views/components/feedback/feedback-read-unit/feedback-read-unit.component';
import { FeedbackCreateComponent } from './views/components/feedback/feedback-create/feedback-create.component';
import { FeedbackDeleteComponent } from './views/components/feedback/feedback-delete/feedback-delete.component';
import { FeedbackUpdateComponent } from './views/components/feedback/feedback-update/feedback-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'collaborators',
    component: CollaboratorReadComponent
  },
  {
    path: 'collaborators/create',
    component: CollaboratorCreateComponent
  },
  {
    path: 'collaborators/update/:id',
    component: CollaboratorUpdateComponent
  },
  {
    path: 'collaborators/delete/:id',
    component: CollaboratorDeleteComponent
  },
  {
    path: 'feedbacks/collaborator/:id',
    component: FeedbackReadComponent
  },
  {
    path: 'feedbacks/:id',
    component: FeedbackReadUnitComponent
  },
  {
    path: 'feedback/create',
    component: FeedbackCreateComponent
  }, 
  {
    path: 'feedback/delete/:id',
    component: FeedbackDeleteComponent
  },
  {
    path: 'feedback/update/:id',
    component: FeedbackUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
