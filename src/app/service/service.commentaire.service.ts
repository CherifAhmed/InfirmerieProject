import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commentaire } from '../Model/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private url="localhost:8080/"
  constructor(private http:HttpClient) { }
   saveCommentaire(commentaire:Commentaire){
     return this.http.post(this.url+"commentaires",commentaire)
   }
   getAllCommentaire() {
     return this.http.get(this.url+"commentaires")
   }
  }
   