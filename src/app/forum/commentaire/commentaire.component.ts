import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PublicationService } from 'src/app/service/service.publication';
import { Commentaire } from 'src/app/Model/Commentaire';
import { CommentaireService } from 'src/app/service/service.commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
@Output()  code=new EventEmitter;
@Input()  id:any;
private publication:any;
private commentaire:Commentaire=new Commentaire();
  constructor(private publicationService:PublicationService,private commentaireService: CommentaireService) { }
  ngOnInit() {
    this.goPublication();
  }

goPublication(){
  this.publicationService.afficherOnePulication(this.id).subscribe(data=>{
    this.publication=data;
    console.log(this.publication)
},err=>{console.log(err)})
}
  return(){
    this.code.emit(0);
    console.log(this.id)
  }
  Jaime(id){
    this.id.emit(id);
   this.publicationService.afficherOnePulication(id).subscribe(data=>{
     console.log(id);
     this.publication=data;
     console.log(this.publication);
     this.publication.nbreJaime++;
     this.publicationService.updatePublication(id,this.publication).subscribe(data=>
       {this.goPublication();
       },err=>{
          console.log(err);
       })
      },err=>
     {console.log(err)
      }
   )
 }

 AjoutComment(){
   this.commentaire.publication=this.publication;
   this.commentaireService.saveCommentaire(this.commentaire).subscribe(data=>{
     console.log(data)},err=>{console.log(err)}
   )
 }
}
