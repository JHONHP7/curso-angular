import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    {_id : '1', name: 'Angular', category: 'Front-end'}
  ];
  displayedColumns = ['name', 'category'];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}