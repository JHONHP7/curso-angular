import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../courses/course';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly apiUrl  = 'api/courses'; // Caminho relativo ao arquivo JSON

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<Course[]>(this.apiUrl)
    .pipe(
      first(),
      delay(0),
      tap(courses => console.log(courses))
    );
  }
}
