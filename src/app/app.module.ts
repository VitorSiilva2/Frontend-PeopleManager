import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { CollaboratorReadComponent } from './views/components/collaborator/collaborator-read/collaborator-read.component';
import { CollaboratorCreateComponent } from './views/components/collaborator/collaborator-create/collaborator-create.component';
import { CollaboratorUpdateComponent } from './views/components/collaborator/collaborator-update/collaborator-update.component';
import { CollaboratorDeleteComponent } from './views/components/collaborator/collaborator-delete/collaborator-delete.component';
import { FeedbackReadComponent } from './views/components/feedback/feedback-read/feedback-read.component';
import { FeedbackCreateComponent } from './views/components/feedback/feedback-create/feedback-create.component';
import { FeedbackReadUnitComponent } from './views/components/feedback/feedback-read-unit/feedback-read-unit.component';
import { FeedbackDeleteComponent } from './views/components/feedback/feedback-delete/feedback-delete.component';
import { FeedbackUpdateComponent } from './views/components/feedback/feedback-update/feedback-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CollaboratorReadComponent,
    CollaboratorCreateComponent,
    CollaboratorUpdateComponent,
    CollaboratorDeleteComponent,
    FeedbackReadComponent,
    FeedbackCreateComponent,
    FeedbackReadUnitComponent,
    FeedbackDeleteComponent,
    FeedbackUpdateComponent,
 
  ],
  imports: [
    BrowserModule,
AppRoutingModule,
FormsModule,
ReactiveFormsModule,
BrowserAnimationsModule,
HttpClientModule,
BrowserModule,
AppRoutingModule,
BrowserAnimationsModule,
MatToolbarModule,
MatSidenavModule,
MatIconModule,
MatButtonModule,
MatListModule,
MatCardModule,
MatTableModule,
MatSelectModule,
MatInputModule,
MatDatepickerModule,
MatPaginatorModule,
MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
