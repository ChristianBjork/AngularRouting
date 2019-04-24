import { Injectable } from '@angular/core';
import { Student } from '../entities/student';
import { Elective } from '../entities/elective';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  electives: Elective[];

  constructor() {
    this.electives = [
      {_id: '1', name: 'Python', teacher: 'Claus', students: this.getPythonStudentList()},
      {_id: '2', name: 'Angular', teacher: 'Christian', students: this.getangularStudentList()},
      {_id: '3', name: 'AI', teacher: 'Dora', students: this.getAIStudentList()},
      {_id: '4', name: 'Android', teacher: 'Faisal', students: this.getandroidStudentList()},
      {_id: '5', name: 'C', teacher: 'Asger', students: this.getCStudentList()}
    ]
  }

  findElective(searchForId: string) : Elective {
    console.log(searchForId);
    return this.electives.find(lookUpElective => lookUpElective._id === searchForId);
  } 


getPythonStudentList(): Student [] {
    return [
      {name: 'Berit'},
      {name: 'Holger'},
      {name: 'Androkles'}
    ]
  }
    
getangularStudentList(): Student [] {
  return [
      {name: 'Jeppe'},
      {name: 'Casper'},
      {name: 'Martin'}
  ]
}
  
getCStudentList(): Student [] {
  return [
    {name: 'Finn'},
    {name: 'Julius'},
    {name: 'Mikael'}
  ]
}

 getAIStudentList(): Student[] {
    return  [
    {name: 'Konrad'},
    {name: 'Ivar'},
    {name: 'Bjørn'}
    ]
    }

getandroidStudentList(): Student [] {
  return [
    {name: 'Rasmus'},
    {name: 'Mads'},
    {name: 'Peter'}
  ]
  } 
}
