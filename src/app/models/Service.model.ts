import { Hotel } from "./hotel.model";

export interface Service {
  id: number;
  service: string;
  noms: string[];
  description: string;
  gratuit: boolean;
 
}
