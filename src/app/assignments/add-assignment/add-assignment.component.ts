import { Component, EventEmitter, Output } from '@angular/core';
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

  onSubmit(event:any){
    //tous ce qu'on peut faire en javascript on peut faire ici
    if(this.nomDevoir==="")return;
    if(this.dateDeRendu===undefined)return;

    let assignement = new Assignment();
    assignement.datedeRendu = this.dateDeRendu;
    assignement.nom = this.nomDevoir;
    //this.assignements.push(assignement);

    this.nouvelAssignement.emit(assignement);

    console.log("date de rendu : "+this.dateDeRendu);
  }
}
