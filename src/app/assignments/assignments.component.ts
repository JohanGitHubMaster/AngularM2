import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignement.model';
import { AssignementsService } from '../shared/assignements.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit{
  titre = "Liste des devoirs a rendre";
  c = "orange";
  assingnmentSelectionner!:Assignment;
  assignements:Assignment[] = [
    {
      id:1,
      nom:"Devoir Angular de Mr Buffa",
      datedeRendu:new Date("2023-06-01"),
      rendu:false
    },
    {
      id:2,
      nom:"Devoir Grails de Mr Galli",
      datedeRendu:new Date("2023-04-15"),
      rendu:true
    },
    {
      id:3,
      nom:"Devoir Big Data de Mr Mopolo",
      datedeRendu:new Date("2023-04-01"),
      rendu:true
    }
  ]
  boutonDesactive=false;
  ajoutActive=true;
  nomDevoir="";
  dateDeRendu!:Date;
  formVisible=false;

  //pour le service
  assignementsServ!:Assignment[];

  ngOnInit(): void{
    console.log("Composant instancie et rendu html");
    setTimeout(()=>{
      //this.ajoutActive=true;
    },2000)
    
    //ajout du service
    this.assignmentsService.getAssignments().subscribe(assignements=>{
      this.assignementsServ = assignements;
      console.log(assignements)
    });
  }

  constructor(private assignmentsService:AssignementsService,private authService:AuthService){

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

  onAssignmentClique(assignment:Assignment){
    this.assingnmentSelectionner = assignment;
    console.log("nom de l'assignement : "+assignment.nom);
  }

  onAddAssignmentBtnClick(){
    this.formVisible = true;
  }

  onNouvelAssignement(assignment: Assignment){
    this.assignements.push(assignment);
    this.formVisible=false;
  }

  onNouvelAssignementService(assignment: Assignment){
    this.assignmentsService.addAssignment(assignment).subscribe(result=>{
      console.log(result);
    });
    this.formVisible=false;
  }


  onDeleteAssignement(assignment:Assignment){
    console.log("onDeleteAssignement")
    //const index = this.assignements.indexOf(assignment, 0);
    // const index = this.assignements.indexOf(this.assingnmentSelectionner, 0);

    // if (index > -1) {
    //   this.assignements.splice(index, 1);
    //   this.formVisible=false;
    //   console.log("Suppression fait ");
    // }

    this.assignmentsService.deleteAssignment(this.assingnmentSelectionner).subscribe(message=>{
      console.log(message)
    });
  }

  LogOut(){
    console.log("logOut");
    this.authService.logOut();
  }

}
