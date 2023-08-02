import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborator } from 'src/app/models/collaborator';
import { CollaboratorService } from 'src/app/services/collaborator.service';

@Component({
  selector: 'app-collaborator-delete',
  templateUrl: './collaborator-delete.component.html',
  styleUrls: ['./collaborator-delete.component.css']
})
export class CollaboratorDeleteComponent implements OnInit {

  id_collaborator = ''

  collaborator: Collaborator = {
    name: "",
    email: "",
    office: ""

  }

  constructor(
    private service: CollaboratorService,
    private router : Router,
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.id_collaborator = this.route.snapshot.paramMap.get('id')!
      this.findById();
    }

  cancel(): void{
      this.router.navigate(["collaborators"])
  }

  findById(): void {
    this.service.findById(this.id_collaborator).subscribe(response => {
      this.collaborator = response;
    })
  }

  delete(): void {
    this.service.delete(this.id_collaborator).subscribe(response => {
      this.router.navigate(['collaborators'])
      this.service.message('Deletado com sucesso ')
    }, err => {
      console.log(err)
    })

  }
}
