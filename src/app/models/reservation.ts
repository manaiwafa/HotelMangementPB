import { Chambre } from './chambre.model';
import { Hotel } from "./hotel.model";

export class Reservation {
  id!: number;
  dateArrivee!: Date;
  dateDepart!: Date;
  nombreClients!: number;
  vue!: string;
  type!: string;
  repas!: string;
  prix!: number;
  nom!: string;
  prenom!: string;
  cin!: string;
  telephone!: string;
  email!: string;
  hotel!: Hotel;
  status!: string;
  Chambre!: Chambre;
}
