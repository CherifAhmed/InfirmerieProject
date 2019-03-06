import { Contact } from './Model.Contact';

export class Message{
     id: number=0;
     texte: string='';
     dateMessage: Date= new Date();
     emetteur: Contact= new Contact();
     recepteur: Contact= new Contact();
     reponseMessage:any;
     vue: boolean = true;
}