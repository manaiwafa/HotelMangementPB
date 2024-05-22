import { Hotel } from "./hotel.model";
import { Utilisateur } from "./utilisateur.model";

export class InscriptionRequest {
  hotel!: Hotel;
  utilisateur!: Utilisateur;
}
