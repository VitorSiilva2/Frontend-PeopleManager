import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';
import { format } from 'date-fns';
import { Collaborator } from 'src/app/models/collaborator';

@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css']
})
export class FeedbackCreateComponent implements OnInit{

  currentDateInGMTFormat = this.getCurrentDateInGMTFormat();
 
  feedback: Feedback = {
    moment: this.currentDateInGMTFormat,
    collaborator: { id: '' , name: '', email: '', office: '' },
    feedbackText: '',
  }

    constructor(
      private service: FeedbackService,
      private router : Router,
      private route : ActivatedRoute
      ) {}

      ngOnInit(): void {
        this.feedback.collaborator.id = this.route.snapshot.paramMap.get('collaboratorId')!
      }

      create(): void{
        this.service.create(this.feedback).subscribe((response) => {
          this.router.navigate([`feedbacks/collaborator/${this.feedback.collaborator.id}`])
          this.service.message('Succeso!')
        }, err => {
          console.log(err)
        })
      }

      cancel(): void{ 
        this.router.navigate([`feedbacks/collaborator/${this.feedback.collaborator.id}`]);
      }

    getCurrentDateInGMTFormat(): string {
      const currentDate = new Date();
      const year = currentDate.getUTCFullYear();
      const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getUTCDate()).padStart(2, '0');
      const hours = String(currentDate.getUTCHours()).padStart(2, '0');
      const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
    
      const gmtFormattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
      return gmtFormattedDate;
    }

}
