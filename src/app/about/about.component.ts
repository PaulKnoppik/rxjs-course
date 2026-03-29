import { Component, OnInit } from '@angular/core';
import { createHttpObservable } from '../common/util';
import { map } from 'rxjs/operators';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const http$ = createHttpObservable('/api/courses')

    const courses$ = http$
      .pipe(
        map(res => Object.values(res["payload"]))
      )

    courses$.subscribe({
      next: courses => console.log(courses),
      complete: () => console.log('completed')
    });


  }

}

