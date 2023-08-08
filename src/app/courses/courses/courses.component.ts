// courses.component.ts
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(
      courses => {
        this.courses = courses;
      },
      error => {
        console.error('Error loading courses:', error);
      }
    );
  }
}
