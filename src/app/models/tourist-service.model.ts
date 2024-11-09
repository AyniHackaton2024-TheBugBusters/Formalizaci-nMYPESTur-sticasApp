import {User} from './user.model';

export class TouristService {
  account_id:  User | string;
  title_service: string;
  description: string;
  itinerary: string;
  included_services: string;
  not_included_services: string;
  recommendations: string;
  picturesUrls: string[];
  __v: number;

  constructor(
    account_id: User | string,
    title_service: string,
    description: string,
    itinerary: string,
    included_services: string,
    not_included_services: string,
    recommendations: string,
    picturesUrls: string[],
    __v: number
  ) {
    this.account_id = account_id;
    this.title_service = title_service;
    this.description = description;
    this.itinerary = itinerary;
    this.included_services = included_services;
    this.not_included_services = not_included_services;
    this.recommendations = recommendations;
    this.picturesUrls = picturesUrls;
    this.__v = __v;
  }
}
