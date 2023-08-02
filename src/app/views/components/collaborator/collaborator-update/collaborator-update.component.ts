import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Collaborator } from 'src/app/models/collaborator';
import { CollaboratorService } from 'src/app/services/collaborator.service';

@Component({
  selector: 'app-collaborator-update',
  templateUrl: './collaborator-update.component.html',
  styleUrls: ['./collaborator-update.component.css']
})
export class CollaboratorUpdateComponent implements OnInit{

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

    name = new FormControl('', [Validators.minLength(3)])
    email = new FormControl('', [Validators.minLength(11)])
    office = new FormControl('', [Validators.minLength(3)])

  update(): void {
    this.service.update(this.collaborator).subscribe((response) => {
      this.router.navigate(['collaborators'])
      this.service.message('Atualizado com sucesso')
    }, err => {
      console.log(err)
    })
  }


  cancel(): void{
    this.router.navigate(["collaborators"])
  }

  findById(): void {
    this.service.findById(this.id_collaborator).subscribe(response => {
      this.collaborator = response;
    })
  }

  errorValidForm() {
    if(this.name.invalid, this.email.invalid, this.office.invalid) {
      return 'Preencha o campo! ';
    }
    return false;
  }



}
