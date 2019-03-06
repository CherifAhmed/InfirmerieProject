import { Contact } from './Model.Contact';

export class Publication{
private code:number=0;
private datePublication:Date=new Date();
private titre: string ='';
private photo: string='';
private sujet:string='';
private nbreJaime: number=0;
private vue: number=0;
public contact:Contact;
private commentaires:any;
}