import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url='http://localhost:8080/';
  jwttoken=null;
  constructor(private http:HttpClient) {}
  loadToken(){
    this.jwttoken=localStorage.getItem('token')
  }
  saveContact(formdata: FormData) {
   return this.http.post(this.url+'connect',formdata)
  }
  
  getContact(id:number){
    if(this.jwttoken==null) this.loadToken();
    return this.http.get(this.url+'contacts/'+id, {headers:new HttpHeaders({'authorization':this.jwttoken})})
   }

  putContact(formdata:FormData,id:number) {
    if(this.jwttoken==null) this.loadToken();
     return this.http.put(this.url+'contacts/'+id,formdata, {headers:new HttpHeaders({'authorization':this.jwttoken})})
   }
   
  getNomContact(nomContact: string,typeContact:String){
    return this.http.get(this.url+'noms?nom='+nomContact+'&typeContact='+typeContact+'&size=30')
  }
  
  
  getAdresseContact(adresseContact: string,typeContact:String){
   
    return this.http.get(this.url+'adresse'+'?adresse='+adresseContact+'&typeContact='+typeContact+'&size=30')
  }

  getTypeContact(typeContact:String){
    return this.http.get(this.url+'contactsPerType'+'?type='+typeContact+'&size=30')
  }
  getAllcontact(){
    return this.http.get(this.url+'contactsAll')
  }
  }


