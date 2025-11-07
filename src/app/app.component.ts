import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SidenavContainerComponent} from '@features/sidenav/container/sidenav-container.component';
import {HeaderComponent} from '@features/header/component/header.component';
import {FooterComponent} from '@features/footer/component/footer.component';
import {AppService} from '@services/app/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidenavContainerComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appService = inject(AppService);
}
