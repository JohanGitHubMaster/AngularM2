import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignement.model';
import { AssignementsService } from 'src/app/shared/assignements.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  @Input()
  assignmentDetail?:Assignment

  @Output()
  //EventFils = new EventEmitter<Assignment>()
  EventFils = new EventEmitter()

  constructor(private assignmentService:AssignementsService){

  }

  onDelete(){
    if(!this.assignmentDetail)return;

    console.log(this.assignmentDetail)
    //this.EventFils.emit(this.assignmentDetail);
    this.EventFils.emit();
    this.assignmentDetail = undefined;
  }

  onAssignmentRendu(){
    if(!this.assignmentDetail)return;

    this.assignmentDetail.rendu = true;
    this.assignmentService.updateAssignment(this.assignmentDetail).subscribe(message=>{
      console.log(message);
    });
  }
}
