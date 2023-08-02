import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Collaborator } from 'src/app/models/collaborator'
import { CollaboratorService } from 'src/app/services/collaborator.service';;

@Component({
  selector: 'app-collaborator-create',
  templateUrl: './collaborator-create.component.html',
  styleUrls: ['./collaborator-create.component.css']
})
export class CollaboratorCreateComponent implements OnInit {

  collaborator: Collaborator = {
    name: "",
    email: "",
    office: ""

  }

  name = new FormControl('', [Validators.minLength(3)])
  email = new FormControl('', [Validators.minLength(11)])
  office = new FormControl('', [Validators.minLength(3)])


  constructor(
    private service: CollaboratorService,
    private router : Router
    ) {}

  ngOnInit(): void {
    
  }

  cancel(): void{
      this.router.navigate(["collaborators"])
  }

  create(): void{
    this.service.create(this.collaborator).subscribe((response) => {
      this.router.navigate(["collaborators"])
      this.service.message('Succeso!')
    }, err => {
      console.log(err)
    })
  }
  errorValidForm() {
    if(this.name.invalid, this.email.invalid, this.office.invalid) {
      return 'Preencha o campo! ';
    }
    return false;
  }
}
