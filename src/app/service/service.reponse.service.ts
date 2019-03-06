import { Injectable } from '@angular/core';
import { ReponseMessage } from '../Model/ReponseMessage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceReponseService {
  constructor(private http:HttpClient){ }
  url='http://localhost:8080/';
  jwttoken=null;
  loadToken(){
    this.jwttoken=localStorage.getItem('token')
  }
  saveReponse(reponse: ReponseMessage ){
    if(this.jwttoken==null)  this.loadToken();
    return this.http.post(this.url+'reponses',reponse, {headers:new HttpHeaders({'authorization':this.jwttoken})})
   }
  
  afficherReponseByMessage(code:number){
    if(this.jwttoken==null)  this.loadToken();
    return this.http.get(this.url+'reponses?code='+code, {headers:new HttpHeaders({'authorization':this.jwttoken})})
    }
}
