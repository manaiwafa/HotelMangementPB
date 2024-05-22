import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service';
import { equipementApiService } from '../../services/equipement-api.service';
import { Utilisateur } from '../../models/utilisateur.model';

@Component({
  selector: 'ngx-equipement-et-service',
  templateUrl: './equipement-et-service.component.html',
  styleUrls: ['./equipement-et-service.component.scss']
})
export class EquipementEtServiceComponent implements OnInit {
  services: Service[] = [];
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  servicces: Service[]=[];
  constructor(private servicesService: equipementApiService) {}

  ngOnInit(): void {
      this.getServices();
      this.getServicesByHotel();

  }

  getServices(): void {
      this.servicesService.findAllServices().subscribe(services =>
             this.services = services);
  }
  getServicesByHotel(): void {
    this.servicesService.findAllServicesByHotel(this.connectedUser.hotel.id).subscribe(servicces =>
           this.servicces = servicces);
}
}
