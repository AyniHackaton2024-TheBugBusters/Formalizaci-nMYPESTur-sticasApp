import { Component, Input } from '@angular/core';
import {TouristService} from '../../models/tourist-service.model';
import {MatCard, MatCardContent, MatCardImage, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {User} from '../../models/user.model';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-tourist-service-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    NgIf,
    NgForOf
  ],
  templateUrl: './tourist-service-card.component.html',
  styleUrl: './tourist-service-card.component.css'
})
export class TouristServiceCardComponent {
  @Input() service!: TouristService;

  isUser(account_id: any): account_id is User {
    return (account_id as User).nombre_completo !== undefined;
  }
}
