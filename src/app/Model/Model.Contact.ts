import { NomDetail } from './nomDetail';
import { Adresse } from './adresse';


export class Contact{
    private id:  number=0;
    nomDetail: NomDetail=new NomDetail();
    private adresse: Adresse =new Adresse();
    private email:string='';
    private password='';
    typeContact="";
    private dateInscription= new Date();
    private publication:any;
    private commentaires:any;
    private specialite:string='';
    private reponseMessage: any;
}