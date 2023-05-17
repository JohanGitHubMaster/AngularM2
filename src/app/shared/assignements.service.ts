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

  getAssignment():Observable<Assignment[]>{
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

  constructor(private loggingService:LoggingService) { }
}
