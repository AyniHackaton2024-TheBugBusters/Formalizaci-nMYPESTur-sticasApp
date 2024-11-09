import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from './layout/main-page/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    SidebarComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AyniMypesApp';
}
