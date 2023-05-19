import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignement.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignementsService {

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

  getAssignments():Observable<Assignment[]>{
    return of(this.assignements);
  }

  addAssignment(assignement:Assignment):Observable<string>{
    this.assignements.push(assignement);
    this.loggingService.log(assignement.nom,"ajouté");
    return of("Assignement ajouté avec succes");
  }
  updateAssignment(assignement:Assignment):Observable<string>{
    //assignement.rendu = true;
    this.loggingService.log(assignement.nom,"ajouté");
    return of("assignement modifier avec succes");
  }

  deleteAssignment(assignement:Assignment):Observable<string>{
    const index = this.assignements.indexOf(assignement, 0);

    if (index > -1) {
      this.assignements.splice(index, 1);
      this.loggingService.log(assignement.nom,"ajouté");
      return of("Suppression fait ");
    }
    return of('supression echouer');
  }

  getAssignment(id:number):Observable<Assignment|undefined>{
    let assignement:Assignment|undefined = this.assignements.find(a=>a.id===id);
    return of(assignement);
  }

  constructor(private loggingService:LoggingService) { }
}
