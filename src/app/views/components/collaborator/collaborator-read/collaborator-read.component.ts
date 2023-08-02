import { AfterViewInit, Component, ViewChild} from '@angular/core'; 
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Collaborator } from 'src/app/models/collaborator';
import { CollaboratorService } from 'src/app/services/collaborator.service';

@Component({
  selector: 'app-collaborator-read',
  templateUrl: './collaborator-read.component.html',
  styleUrls: ['./collaborator-read.component.css']
})
export class CollaboratorReadComponent implements AfterViewInit {

  collaborators: Collaborator[] = [];

  displayedColumns: string[] = ['name', 'email', 'office', 'action'];
  dataSource = new _MatTableDataSource<Collaborator>(this.collaborators);


  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: CollaboratorService,
    private router : Router
    ) {}

  ngAfterViewInit() {
    
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.collaborators = resposta;
      this.dataSource = new _MatTableDataSource<Collaborator>(this.collaborators);
      this.dataSource.paginator = this.paginator;
    })
  }
  

navigateToCreate():void{
  this.router.navigate(['collaborators/create'])
}

navigateToFeedback(id: String):void {
  console.log("Navigating to feedback", id)
  this.router.navigate([`feedbacks/collaborator/${id}`])  
}

}


