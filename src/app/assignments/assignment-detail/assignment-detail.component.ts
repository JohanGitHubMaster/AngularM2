import { Component, Input } from '@angular/core';
import { Assignment } from '../assignement.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  @Input()
  assignmentDetail!:Assignment
}
