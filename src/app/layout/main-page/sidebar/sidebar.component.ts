import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MatNavList, MatListItem, MatButton],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
