import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdCompteService {
private messagesource=new BehaviorSubject<string>("Mon compte");
public shared =this.messagesource.asObservable();

//private etat:string='';
  constructor() { }
 envoieEtat(newetat){
    this.messagesource.next(newetat)
  }
 /* loadetat(newetat){
     this.etat=newetat;
  }
  getetat(){
    return this.etat;
  }*/
}
