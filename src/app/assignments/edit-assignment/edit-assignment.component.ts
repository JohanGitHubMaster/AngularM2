import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignementsService } from 'src/app/shared/assignements.service';
import { Assignment } from '../assignement.model';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
assignment:Assignment|undefined;
nomAssignment!:string;
dateDeRendu!:Date;

constructor(private assignmentService:AssignementsService,private route:ActivatedRoute,private router:Router){

}

ngOnInit(): void {
  
  const id = +this.route.snapshot.params['id'];

  //recuperation query
  const query = this.route.snapshot.queryParams;
  const fragment = this.route.snapshot.fragment;
  console.log(query["nom"])
  console.log(query["matiere"])
  console.log(fragment)

  //function find
  this.assignmentService.getAssignment(id).subscribe(assignment=>{
    if(!assignment)return;
    this.assignment = assignment;
    this.dateDeRendu = assignment.datedeRendu;
    this.nomAssignment = assignment.nom;

  });

}

onSaveAssignment($event:any){

}
}
