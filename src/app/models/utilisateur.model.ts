import { Hotel } from './hotel.model';
export class Utilisateur {
  id!: number;
  nom!: string;
  prenom!: string;
  cin!: string;
  telephone!: string;
  email!: string;
  dateNaissance!: Date;
  motDePasse!: string;
  hotelId!: number;
  role!: string;
  hotel!: Hotel;
}
