import { Component } from '@angular/core';
import {SidebarComponent} from '../../layout/main-page/sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-page-layout',
  standalone: true,
  imports: [
    SidebarComponent, RouterOutlet
  ],
  templateUrl: './main-page-layout.component.html',
  styleUrl: './main-page-layout.component.css'
})
export class MainPageLayoutComponent {

}
