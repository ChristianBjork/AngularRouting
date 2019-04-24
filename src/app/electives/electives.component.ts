import { Component, OnInit } from '@angular/core';
import { Elective } from '../entities/elective';
import { ActivatedRoute } from '@angular/router';
import { StudentsComponent } from '../students/students.component';
import { Student } from '../entities/student';
import { TempDataService } from '../service/temp-data.service';

@Component({
  selector: 'app-electives',
  templateUrl: './electives.component.html',
  styleUrls: ['./electives.component.css']
})
export class ElectivesComponent implements OnInit {
  studentList: Student[];
  electives: Elective[];
  elective: Elective;

  constructor(private route: ActivatedRoute, private students: StudentsComponent, private temp: TempDataService) { }

  ngOnInit() {

    this.electives =
    [
      {_id: '1', name: 'Python', teacher: 'Claus', students: this.temp.getPythonStudentList()},
      {_id: '2', name: 'Angular', teacher: 'Christian', students: this.temp.getangularStudentList()},
      {_id: '3', name: 'AI', teacher: 'Dora', students: this.temp.getAIStudentList()},
      {_id: '4', name: 'Android', teacher: 'Faisal', students: this.temp.getandroidStudentList()},
      {_id: '5', name: 'C', teacher: 'Asger', students: this.temp.getCStudentList()}
    ]
    /* this.route.paramMap.subscribe(params => {let name = +params.get('name');
    console.log(name);
    })
    */

/*    this.route.paramMap.subscribe(params => {let id = +params.get('_id');
   console.log(id);
   }) */


  /*   const id = this.route.snapshot.paramMap.get('id');

    this.elective = this.temp.findElective(id); */

  }

}
