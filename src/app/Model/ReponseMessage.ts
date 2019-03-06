import { Message } from './Model.Message';
import { Contact } from './Model.Contact';

export class ReponseMessage{
    private id:number=0;
    private dateReponse:Date= new Date();
    message: Message=new Message();
    texte:string='';
    contact:Contact=new Contact();
}