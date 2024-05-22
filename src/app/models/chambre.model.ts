import { Hotel } from "./hotel.model";

export class Chambre {
  id: number;
  numero: number;
  etage: number;
  type: string;
  vue: string;
  reserver: boolean;
  hotel: Hotel;
  nbrShampoing: number;
  nbrDesLinges: number;
  nbrGelDouche: number;
  nbrPapier: number;
  nettoyerr: String;
}
