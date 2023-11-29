import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Snippet } from '../../snippets';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private lorem = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
  invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
  justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. `;

  private snippets: Snippet[] = [
    { title: 'snippet 1', content: this.lorem },
    { title: 'snippet 2', content: this.lorem + this.lorem },
    { title: 'snippet 3', content: this.lorem + this.lorem },
    { title: 'snippet 4', content: this.lorem },
    { title: 'snippet 5', content: this.lorem },
    { title: 'snippet 6', content: this.lorem },
  ];

  private snippetsSubject = new BehaviorSubject(this.snippets);

  snippets$: Observable<Snippet[]> = this.snippetsSubject.asObservable().pipe(
    map((s) => s.sort((a, b) => a.title.localeCompare(b.title))),
    tap(() => console.log('Fetching snippets')),
  );

  addSnippet(snippet: Snippet) {
    this.snippets.push(snippet);
    this.snippetsSubject.next([...this.snippets]);
  }
}
