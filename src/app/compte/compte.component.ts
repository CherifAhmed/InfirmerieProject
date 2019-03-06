import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/service.contact';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationService } from '../service/service.publication';
import { Contact } from '../Model/Model.Contact';
import { ReponseMessage } from '../Model/ReponseMessage';
import { ServiceReponseService } from '../service/service.reponse.service';
import { MessageService } from '../service/service.message';
import { AuthenticationService } from '../service/authentication.service';
import { IdCompteService } from '../service/id-compte.service';



@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  private connexion:string="Connexion";
  public id: number;
  private nbreVue:number=0;
  private code:number=1;
  private contact:any;
  private publication:any;
  private Vue:any;
  private selectedFile:any = File;
  private contactupdate:Contact = new Contact();
  private mouseonimage:boolean=false;
  private Onemessage:any;
  private reponses:any;
  private id_message:any;
  private messages:any;
  private showreponse:number=0;
  private reponseMessage:ReponseMessage=new ReponseMessage();
  constructor(private contactservice: ContactService,private publicationService:PublicationService,
              private route: ActivatedRoute, private router: Router,private reponseService:ServiceReponseService,
              private messageService:MessageService,private authenticationService: AuthenticationService,
              private idcompteservice:IdCompteService) { }

  ngOnInit() { 
           /* this.route.paramMap.subscribe( params => {
            this.id = +params.get('id');
            console.log(this.id);
              })
             this.idcompteservice.shared.subscribe(x=> this.id=x)
              
              //this.id=this.idcompteservice.getid();    */
              this.id =parseInt(sessionStorage.getItem("id"));
              console.log(this.id); 
              this.contactservice.getContact(this.id).subscribe ( data => {      
              console.log(data);
               // console.log("++++++");
              this.contact = data;
           // this.idcompteservice.loadid(this.contact.id);
              }, err=> { console.log(err);
             //   this.authenticationService.logout();
             //   this.router.navigateByUrl('/connect');
          })         
          this.gopublications();
          this.getAllMessage();
          
   }
   onFileSelected(event){
    console.log(event);
    this.selectedFile=<File>event.target.files[0];
    this.contactupdate = this.contact;
   this.contactupdate.nomDetail.photo = this.selectedFile;
   this.contact = this.contactupdate;
    const user =  JSON.stringify(this.contact);
       const formData = new FormData();
    formData.append('user',user);console.log(formData);
    formData.append('file',this.selectedFile,this.selectedFile.name);
    this.contactservice.putContact(formData,this.contact.id).subscribe(data =>{
    console.log(data);},err=> {console.log(err)}  )
    }

    getAllMessage(){
      this.messageService.getMessageRecu(this.id).subscribe(data=>{
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
        
  gopublication(){
           this.code=2;
       }
  gopublications(){
          this.code=1;
         }
  gomessage(){
    this.code=3;
  }
  changeimage(){
       this.mouseonimage= !this.mouseonimage;
  }
  repondre(){
    this.showreponse=1;
  }
  EnvoyerReponse(){
    this.reponseMessage.message=this.Onemessage;
    console.log(this.reponseMessage.message);
    this.reponseMessage.contact=this.contact;
    console.log(this.reponseMessage.contact);
    this.reponseService.saveReponse(this.reponseMessage).subscribe(data=>{
      console.log(data)
    this.reponseService.afficherReponseByMessage(this.id_message).subscribe(data=>{
       console.log(data)
      this.reponses=data},err=> {
         console.log(err)
     })  },err=> {console.log(err)})}
   
     deconnect(){
       this.authenticationService.logout();
       this.router.navigateByUrl('/connect')
       this.idcompteservice.envoieEtat(this.connexion)
     }
}