import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../Model/Model.Message';

@Injectable({
    providedIn: 'root'
  })
  export class MessageService {
    url='http://localhost:8080/';
    jwttoken=null;
    constructor(private http:HttpClient) { }
    loadToken(){
      this.jwttoken=localStorage.getItem('token')
    }
    saveMessage(message: Message ){
      if(this.jwttoken==null)  this.loadToken();
        return this.http.post(this.url+'messages',message, {headers:new HttpHeaders({'authorization':this.jwttoken})})
    }
    getmessage(code:number){
      if(this.jwttoken==null)  this.loadToken();
      return this.http.get(this.url+'messages?code='+code, {headers:new HttpHeaders({'authorization':this.jwttoken})})
    }

    getOnemessage(id:number){
      if(this.jwttoken==null)  this.loadToken();
      return this.http.get(this.url+'messages/'+id, {headers:new HttpHeaders({'authorization':this.jwttoken})})
    }
    updatemessage(id:number,message:Message){
      if(this.jwttoken==null)  this.loadToken();
      return this.http.put(this.url+'messages/'+id,message, {headers:new HttpHeaders({'authorization':this.jwttoken})})
    }
    getMessageRecu(code:number){
      if(this.jwttoken==null) this.loadToken();
        return this.http.get(this.url+'messagesrecus?code='+code, {headers:new HttpHeaders({'authorization':this.jwttoken})})
    }
}
