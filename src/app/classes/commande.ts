import { Produit } from "./produit";

export class Commande {
    constructor (
        public product:Produit,
        public quantity:number){
    }
}
