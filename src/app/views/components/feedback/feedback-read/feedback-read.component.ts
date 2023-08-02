import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core'; 

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback-read',
  templateUrl: './feedback-read.component.html',
  styleUrls: ['./feedback-read.component.css']
})
export class FeedbackReadComponent implements AfterViewInit {

  collaboratorId = ''

  feedbacks: Feedback[] = [];

  displayedColumns: string[] = ['moment', 'action'];
  dataSource = new _MatTableDataSource<Feedback>(this.feedbacks);
  
  ngOnInit(): void {
    this.collaboratorId = this.route.snapshot.paramMap.get('id')!
    this.findAll();
  }


  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: FeedbackService,
    private router : Router,
    private route: ActivatedRoute
    ) {}

  ngAfterViewInit() {
  }

  findAll():void {
    this.service.findAll(this.collaboratorId).subscribe((resposta) => {
      this.feedbacks = resposta;
      this.dataSource = new _MatTableDataSource<Feedback>(this.feedbacks);
      this.dataSource.paginator = this.paginator;
    })
  }

navigateToCreate():void{
  this.router.navigate(['feedback/create', { collaboratorId: this.collaboratorId }])
}

navigateToFeedback(id: String):void {
  console.log("Navigating to feedback")
  this.router.navigate([`feedbacks/${id}`])  
}



}

