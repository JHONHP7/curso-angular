import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../courses/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  apiUrl = 'assets/course.json'; // Caminho relativo ao arquivo JSON

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<Course[]>(this.apiUrl);
  }
}
