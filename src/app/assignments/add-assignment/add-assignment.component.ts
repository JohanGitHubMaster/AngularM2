import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AssignementsService } from 'src/app/shared/assignements.service';
import { Assignment } from '../assignement.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {

  ajoutActive=true;
  nomDevoir="";
  dateDeRendu!:Date;

  //se connecter au pere du fils
  @Output()
  nouvelAssignement = new EventEmitter<Assignment>();


  constructor(private assignmentService:AssignementsService,private router:Router){}

  onSubmit(event:any){
    //tous ce qu'on peut faire en javascript on peut faire ici
    if(this.nomDevoir==="")return;
    if(this.dateDeRendu===undefined)return;

    let assignement = new Assignment();
    assignement.datedeRendu = this.dateDeRendu;
    assignement.nom = this.nomDevoir;
    //this.assignements.push(assignement);

    this.assignmentService.addAssignment(assignement).subscribe(message=>{
      console.log(message);
      this.router.navigate(["/home"]);
    });

   // this.nouvelAssignement.emit(assignement);

    console.log("date de rendu : "+this.dateDeRendu);
  }
}
