import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignement.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  @Input()
  assignmentDetail!:Assignment

  @Output()
  EventFils = new EventEmitter<Assignment>()

  onDelete(){
    console.log(this.assignmentDetail)
    this.EventFils.emit(this.assignmentDetail);
  }
}
