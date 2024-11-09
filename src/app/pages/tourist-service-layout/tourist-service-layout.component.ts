import { Component, OnInit } from '@angular/core';
import { TouristService } from '../../models/tourist-service.model';
import { TouristServiceService } from '../../services/touristService/tourist-service.service';
import { TouristServiceCardComponent } from '../../components/tourist-service-card/tourist-service-card.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-tourist-service-layout',
  standalone: true,
  imports: [TouristServiceCardComponent, NgForOf],
  templateUrl: './tourist-service-layout.component.html',
  styleUrls: ['./tourist-service-layout.component.css']
})
export class TouristServiceLayoutComponent implements OnInit {
  services: TouristService[] = [];

  constructor(private touristServiceService: TouristServiceService) {}

  ngOnInit(): void {
    this.touristServiceService.getTouristServices().subscribe((data: TouristService[]) => {
      this.services = data;
    });
  }
}
