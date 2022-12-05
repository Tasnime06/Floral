import { Comments } from "./comments";

export class Produit {
    constructor (
        public libelle:string,
        public categorie:string,
        public prix:number,
        public enStock:boolean,
        public dateAjout:string,
        public description:string,
        public images:string[],
        public comments:Comments[],
        public id?:number,){
    }
    
}
