import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  titre = "Liste des devoirs a rendre";
  c = "orange";
  assignements = [
    {
      nom:"Devoir Angular de Mr Buffa",
      date:"2023-06-01",
      rendu:false
    },
    {
      nom:"Devoir Grails de Mr Galli",
      date:"2023-04-15",
      rendu:true
    },
    {
      nom:"Devoir Big Data de Mr Mopolo",
      date:"2023-04-01",
      rendu:true
    }
  ]
}
