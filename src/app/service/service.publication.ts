import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Publication } from '../Model/Model.Publication';
@Injectable({
    providedIn: 'root'
  })
  export class PublicationService {
    url='http://localhost:8080/';
    jwttoken=null;
    loadToken(){
      this.jwttoken=localStorage.getItem('token')
    }
    constructor(private http:HttpClient) { }
    savePublication(formdata: FormData ){
      if(this.jwttoken==null) this.loadToken();
        return this.http.post(this.url+'publication',formdata, {headers:new HttpHeaders({'authorization':this.jwttoken})})
       }

    afficherPublication(code:number){
      return this.http.get(this.url+'publicationsContact?codecontact='+code)
    }
    afficherAllPublication(){
      return this.http.get(this.url+'publications')
    }
    updatePublication(id:number,publication:Publication){
      return this.http.put(this.url+'publications/'+id,publication)
    }
    afficherOnePulication(id:number){
      return this.http.get(this.url+'publications/'+id)
    }
  }