import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { IdCompteService } from 'src/app/service/id-compte.service';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  private reponse:any;
  private code:number=0;
  private contact:any;
  private etat:string="Mon compte";
  constructor(private authenticationservice:AuthenticationService, private router:Router,
                                  private idcompteservice:IdCompteService) { }

  ngOnInit() {
    this.idcompteservice.envoieEtat("Connexion"); 
  }

  login(user){
    console.log(user);
    this.authenticationservice.onlogin(user).subscribe(resp=>{
      this.reponse=resp;
      let jwt=this.reponse.headers.get('Authorization')
      console.log(jwt)
      console.log(this.reponse)
      this.authenticationservice.saveToken(jwt)
      this.authenticationservice.getContact(user.email).subscribe(data=>
        { console.log(data)
          this.contact=data;
      //    this.idcompteservice.envoieId(this.contact.id)
      //  this.idcompteservice.loadid(this.contact.id)
         sessionStorage.setItem("id",this.contact.id);
          this.idcompteservice.envoieEtat(this.etat); 
          this.router.navigateByUrl('/compte')
         // this.router.navigate(['/compte',this.contact.id])
        },err=>console.log(err))},
     
      err=>{this.code==1})
  }
}
