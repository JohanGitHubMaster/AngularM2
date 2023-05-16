import { Component } from '@angular/core';
import { Assignment } from './assignement.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  titre = "Liste des devoirs a rendre";
  c = "orange";
  assignements:Assignment[] = [
    {
      nom:"Devoir Angular de Mr Buffa",
      datedeRendu:new Date("2023-06-01"),
      rendu:false
    },
    {
      nom:"Devoir Grails de Mr Galli",
      datedeRendu:new Date("2023-04-15"),
      rendu:true
    },
    {
      nom:"Devoir Big Data de Mr Mopolo",
      datedeRendu:new Date("2023-04-01"),
      rendu:true
    }
  ]
  boutonDesactive=false;
  ajoutActive=true;
  nomDevoir="";
  dateDeRendu!:Date;
  ngOnInit(): void{
    console.log("Composant instancie et rendu html");
    setTimeout(()=>{
      //this.ajoutActive=true;
    },2000)
  }

  onSubmit(event:any){
    //tous ce qu'on peut faire en javascript on peut faire ici
    if(this.nomDevoir==="")return;
    if(this.dateDeRendu===undefined)return;

    let assignement = new Assignment();
    assignement.datedeRendu = this.dateDeRendu;
    assignement.nom = this.nomDevoir;
    this.assignements.push(assignement);
    console.log("date de rendu : "+this.dateDeRendu);
  }
}
