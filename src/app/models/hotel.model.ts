import { Region } from "./region";

export class Hotel {
  id!: number;
  nom!: string;
  nombreChambres!: number;
  description!: string;
  emplacementVille!: string;
  nombrePiscines!: number;
  nombreTerrains!: number;
  parking!: String;
  resto!: String;
  coindecoffe!: string;
  activitéetanimation!: string;
  prixAllInclusif!: number;
  prixDemiPension!: number;
  prixPensionComplete!: number;
  prixPetitDej!: number;
  prixPersonne!: number;
  typeDouble!: number;
  typeSuite!: number;
  typeTriple!: number;
  typleSingle!: number;
  active!:boolean;
  prixVueSurMer!: number;
  prixVueNormal!: number;
  prixVueMontagne!: number;
  prixVuePiscine!: number;
  typesimple: number;
  image: String;
  region: Region
  Hotel: any;
  Utilisateur: any;
  prixNuit: number;
}
