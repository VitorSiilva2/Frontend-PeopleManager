import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback-update',
  templateUrl: './feedback-update.component.html',
  styleUrls: ['./feedback-update.component.css']
})
export class FeedbackUpdateComponent implements OnInit {

  id_feedback = ''

  feedback : Feedback = {
    moment: '',
    collaborator: { id: '' , name: '', email: '', office: '' },
    feedbackText: '',
  }

  cancel():void{
    this.router.navigate([`feedbacks/collaborator/${this.feedback.collaborator.id}`])
  }

  update(): void {
    this.service.update(this.feedback).subscribe(response => {
      this.router.navigate([`feedbacks/collaborator/${this.feedback.collaborator.id}`])
      this.service.message('Atualizado com sucesso ')
    }, err => {
      console.log(err)
    })

  }

  findFeedbackById(): void {
    this.service.findFeedbackById(this.id_feedback).subscribe(response => {
      this.feedback = response;
    })
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

}
