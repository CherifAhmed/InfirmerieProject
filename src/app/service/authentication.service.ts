import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
   private url='http://localhost:8080/';
   public jwttoken=null;
  constructor(private http:HttpClient) { }

   onlogin(user){
    return this.http.post(this.url+'login',user, {observe:'response'} )//On veut retourner une donnee json 
                                                                 //on veut recuperer   toute la reponse
   }

   saveToken(jwt:string){
     this.jwttoken=jwt;
      localStorage.setItem('token',jwt);
   }
   loadToken(){
     this.jwttoken=localStorage.getItem('token')
   }
   getContact(email){
     if(this.jwttoken==null) this.loadToken();
     return this.http.get(this.url+'contactsbyEmail?email='+email,
                {headers:new HttpHeaders({'authorization':this.jwttoken})})
   }
   logout(){
     localStorage.removeItem('token')
     this.jwttoken=null;
   }
}
