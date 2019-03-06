import { Contact } from './Model.Contact';
import { Publication } from './Model.Publication';

export class Commentaire{
    private idc:number=0;
    private dateCommentaire:Date=new Date();
    private texte:string="";
    contact:Contact=new Contact();
     publication:Publication=new Publication;
}