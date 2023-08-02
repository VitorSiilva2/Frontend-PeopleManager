import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborator } from 'src/app/models/collaborator';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback-read-unit',
  templateUrl: './feedback-read-unit.component.html',
  styleUrls: ['./feedback-read-unit.component.css']
})
export class FeedbackReadUnitComponent implements AfterViewInit {

  id = '';

  feedbacks: Feedback = {
    collaborator: { id: '', name: '', email: '', office: '' } as Collaborator,
    feedbackText: "",
    moment: ""
  }

  dataSource = new MatTableDataSource<Feedback>();

  constructor(
    private service: FeedbackService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


    longText = 'feedbackText'


  ngAfterViewInit() {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.findAllFeedback();
  }

  findAllFeedback(): void {
    this.service.findFeedbackById(this.id).subscribe((resposta) => {
      this.feedbacks = resposta;
    });
  }
}