import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/service.contact';
import { IdCompteService } from 'src/app/service/id-compte.service';
import { Contact } from 'src/app/Model/Model.Contact';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  typeCompte: string='';
  code: number= 0;
  contact: Contact=new Contact();
   compte:any;
  reponse:any;
  selectedFile:File=null;
  private mouseonimage:boolean=false;
  constructor(private router:Router,private contactservice:ContactService,private idcompteservice:IdCompteService,
               private authenticationservice:AuthenticationService) { }
  ngOnInit() { 
  }
 enterforform(){
       this.code=1; 
 }

    
  onFileSelected(event){
    
    this.selectedFile=<File>event.target.files[0];
    console.log(this.selectedFile);
    }

onSubmit(){
    this.contact.typeContact=this.typeCompte;
    const user =  JSON.stringify(this.contact);
    const formData = new FormData();
    formData.append('user',user);console.log(formData);
    formData.append('file',this.selectedFile,this.selectedFile.name);
    
         this.contactservice.saveContact(formData).subscribe(data => 
          { 
            this.compte=data;
            this.authenticationservice.onlogin(this.contact).subscribe(resp=>{
              this.reponse=resp;
              let jwt=this.reponse.headers.get('Authorization')
              console.log(jwt)
              console.log(this.reponse)
              this.authenticationservice.saveToken(jwt)
               sessionStorage.setItem("id",this.compte.id);
                this.idcompteservice.envoieEtat("Compte"); 
                this.router.navigateByUrl('/compte')
               // this.router.navigate(['/compte',this.contact.id])
              },err=>console.log(err))
            })


          }


         //   sessionStorage.setItem("id",this.reponse.id)
          //  this.idcompteservice.envoieId(this.reponse.id)
        //    this.router.navigateByUrl('/compte');
            //this.router.navigate(['compte',this.reponse.id]) ; }, err=> {console.log(err);
        //  })
     //   }    

    changeimage(){
          this.mouseonimage= !this.mouseonimage;
     }
}