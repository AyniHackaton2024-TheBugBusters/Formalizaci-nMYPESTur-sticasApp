import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatListItem, MatNavList} from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MatNavList, MatListItem],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
