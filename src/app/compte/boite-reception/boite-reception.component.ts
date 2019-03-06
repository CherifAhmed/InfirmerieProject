import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Message } from 'src/app/Model/Model.Message';
import { ContactService } from 'src/app/service/service.contact';
import { MessageService } from 'src/app/service/service.message';
import { ServiceReponseService } from 'src/app/service/service.reponse.service';

@Component({
  selector: 'app-boite-reception',
  templateUrl: './boite-reception.component.html',
  styleUrls: ['./boite-reception.component.css']
})
export class BoiteReceptionComponent implements OnInit {
  @Input()contact:any;
  private code: number=1;
  private message: Message = new Message();
  private AllContact:any;
  private contact2:any;
  ID_Recepteur: number;
  private messages:any;
  private reponse:any;
  private validation:number=0;
  private nbreVue:number=0;
  @Output() public reponses=new EventEmitter;
  @Output() public Onemessage =new EventEmitter;
  @Output() public id_message =new EventEmitter;
  constructor(private contactService: ContactService, private messageService: MessageService,private reponseService:ServiceReponseService) { }
  ngOnInit() {
    this.getAllContactForInit();
    this.getMessageForInit();
  }
  nouveaumessage(){
     this.code=2;
  }
  messagerecu(){
    this.code=1;
    this.getMessageForInit();
  }
  EnvoyerMessage(){
       this.message.emetteur = this.contact;
       this.contactService.getContact(this.ID_Recepteur).subscribe( data =>
       {this.contact2 = data;
        this.message.recepteur=this.contact2;
        this.messageService.saveMessage(this.message).subscribe(data =>
            { console.log(data);
              this.validation=1;
            }, err=>
            console.log(err))
        }, err => console.log(err))
  }
 
  getAllMessage(){
    this.messageService.getMessageRecu(this.contact.id).subscribe(data=>{
      this.messages =data;
      console.log(this.messages)
    for(let c of this.messages.content)
       {if(c.vue==true)
         this.nbreVue++;
        console.log(this.nbreVue) }
  },err=>
      console.log(err)
    )
  }
      
  consultermessage(id_message){
    this.id_message.emit(id_message),
    this.messageService.getOnemessage(id_message).subscribe(data=>{
      this.reponse=data;
      this.reponse.vue=false;
      this.Onemessage.emit(data);
     this.reponseService.afficherReponseByMessage(id_message).subscribe(data=>{
       console.log(data)
       this.reponses.emit(data)
    //   this.messageService.updatemessage(id_message,this.reponse).subscribe(data=>{
      //  this.getAllMessage();
  //    },err=> {
     //    console.log(err)
    //   })  
      },err=> {console.log(err)})
       console.log("***************"+id_message)
       console.log("0****"+this.reponse)
    
       },err=>{
        console.log(err)
        })
  }

  getAllContactForInit(){
    this.contactService.getAllcontact().subscribe(data=>
      {  console.log(data)
         this.AllContact = data;},err=> console.log()
      )
  }
  getMessageForInit(){
    this.messageService.getmessage(this.contact.id).subscribe(data=>{
           this.messages = data;
          console.log(this.messages)},err=>{
             console.log(err)
    })
  }
}
