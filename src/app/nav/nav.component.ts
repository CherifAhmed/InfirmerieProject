import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { IdCompteService } from '../service/id-compte.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  private etat:string="connexion";
  private code:boolean=false;
  constructor(private router:Router,private authenticationservice:AuthenticationService,private idCompteService:IdCompteService) { }
  ngOnInit() {
    this.idCompteService.shared.subscribe(message=> this.etat=message)
    this.authenticationservice.loadToken();
     if(this.authenticationservice.jwttoken==null)
            this.etat="connexion"
          }
  

  onlog(){ this.authenticationservice.loadToken();
     if(this.authenticationservice.jwttoken!=null)
         this.router.navigateByUrl('/compte')
     else { this.router.navigateByUrl('/connect')
            this.etat="connexion"
          }
  }
  
}
