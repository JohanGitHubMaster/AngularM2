import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignement.model';
import { AssignementsService } from 'src/app/shared/assignements.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit{
  @Input()
  assignmentDetail?:Assignment

  @Output()
  //EventFils = new EventEmitter<Assignment>()
  EventFils = new EventEmitter()

  constructor(private assignmentService:AssignementsService,private route:ActivatedRoute,private router:Router,private authService:AuthService){

  }

  ngOnInit():void{
    const id = +this.route.snapshot.params['id'];

    console.log(id)
    this.assignmentService.getAssignment(id).subscribe(assignment=>{
      this.assignmentDetail = assignment;
    })
  }
  onDelete(){
    if(!this.assignmentDetail)return;

    console.log(this.assignmentDetail)
    //this.EventFils.emit(this.assignmentDetail);
    //this.EventFils.emit();

    this.assignmentService.deleteAssignment(this.assignmentDetail).subscribe(message=>{
      console.log(message);
      this.router.navigate(["/home"]);
    });
    this.assignmentDetail = undefined;
    
 
  }

  onAssignmentRendu(){
    if(!this.assignmentDetail)return;

    this.assignmentDetail.rendu = true;
    this.assignmentService.updateAssignment(this.assignmentDetail).subscribe(message=>{
      console.log(message);
    });
  }

  onUpdateAssignment(){
    this.router.navigate(["assignments","edit",this.assignmentDetail?.id],
    {
      queryParams:{
        nom:this.assignmentDetail?.nom,
        matiere:"Angular"
      },
      fragment:"edition"
    });
  }

  logged(){
    return this.authService.loggedIn;
  }
}
