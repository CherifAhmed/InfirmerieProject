import { Contact } from './Model.Contact';
import { Publication } from './Model.Publication';

export class Commentaires{
    private idc:number=0;
    private dateCommentaire:Date= new Date();
    private texte: string='';
    private contact:Contact;
    private publication: Publication;
}