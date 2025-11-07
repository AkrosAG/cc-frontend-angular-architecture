import {Component} from '@angular/core';

import {LoginPageComponent} from '../component/login-page/login-page.component';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [LoginPageComponent],
  template: ` <app-login-page /> `,
  styles: [],
})
export class LoginContainerComponent {}
