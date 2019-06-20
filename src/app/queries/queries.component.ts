import { Component, OnInit } from '@angular/core';
import {combineLatest} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getResultSynchronousRequesst(): void {
    console.log('Parallel');
    combineLatest(
      this.http.get('https://api.github.com/search/repositories?q=angular&per_page=10&page=1'),
      this.http.get('https://api.github.com/search/repositories?q=angular&per_page=10&page=2'),
      this.http.get('https://api.github.com/search/repositories?q=angular&per_page=10&page=3'),
      this.http.get('https://api.github.com/search/repositories?q=angular&per_page=100&page=4'),
    ).subscribe((resRequest12) => {
      console.log(resRequest12);
    });
  }

  getResultAsynchronousRequesst(): void {
    console.log('Sequential');
    this.http.get('https://api.github.com/search/repositories?q=angular&per_page=10&page=1')
      .pipe(
        switchMap( (res) => this.http.get('https://api.github.com/search/repositories?q=angular&per_page=10&page=2').pipe(map(() => 40))),
        switchMap( (res) => {
          console.log(res);
          return this.http.get(`https://api.github.com/search/repositories?q=angular&per_page=${res}&page=3`)
        }),
        switchMap( (res) => this.http.get('https://api.github.com/search/repositories?q=angular&per_page=100&page=4')),
      )
      .subscribe((resRequest2) => {
        console.log(resRequest2);
      });
  }

}
