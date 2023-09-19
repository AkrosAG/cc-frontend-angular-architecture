import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  hideNav$ = this.router.events.pipe(
    filter(e => e instanceof NavigationEnd),
    map((e: NavigationEnd) => e.url === '/login'),
    tap(hideNav => console.log(hideNav)),
  );

  constructor(
    private router: Router,
  ) {}

}
