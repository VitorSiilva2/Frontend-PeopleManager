import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { id } from 'date-fns/locale';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback-delete',
  templateUrl: './feedback-delete.component.html',
  styleUrls: ['./feedback-delete.component.css']
})
export class FeedbackDeleteComponent implements OnInit {

  id_feedback = ''

  feedback: Feedback = {
    moment: '',
    collaborator: { id: '' , name: '', email: '', office: '' },
    feedbackText: '',
  }

  constructor(
    private service: FeedbackService,
    private router : Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_feedback = this.route.snapshot.paramMap.get('id')!
      this.findFeedbackById();
    
  }
  cancel(): void{ 
    this.router.navigate([`feedbacks/collaborator/${this.feedback.collaborator.id}`]);
  }

  findFeedbackById(): void {
    this.service.findFeedbackById(this.id_feedback).subscribe(response => {
      this.feedback = response;
    })
  }

  delete(): void {
    this.service.delete(this.id_feedback).subscribe(response => {
      this.router.navigate([`feedbacks/collaborator/${this.feedback.collaborator.id}`])
      this.service.message('Deletado com sucesso ')
    }, err => {
      console.log(err)
    })

  }

}
