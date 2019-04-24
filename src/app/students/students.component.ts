import { Component, OnInit, Injectable } from '@angular/core';
import { Student } from '../entities/student';
import { ActivatedRoute } from '@angular/router';
import { TempDataService } from '../service/temp-data.service';
import { Elective } from '../entities/elective';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class StudentsComponent implements OnInit {

  studentList: Student[];

  elective: Elective;

  constructor(private route: ActivatedRoute, private temp: TempDataService) { }

  

  ngOnInit() {
  
/*     this.route.paramMap.subscribe(params => {let id = +params.get('id');
   console.log(id);
   }) */
    

  const id = this.route.snapshot.paramMap.get('id'); 

  this.elective = this.temp.findElective(id);

  this.studentList = this.elective.students;
  

  }

  
}

