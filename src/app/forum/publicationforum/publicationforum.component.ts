import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PublicationService } from 'src/app/service/service.publication';

@Component({
  selector: 'app-publicationforum',
  templateUrl: './publicationforum.component.html',
  styleUrls: ['./publicationforum.component.css']
})
export class PublicationforumComponent implements OnInit {
  private publications:any;
  private publication:any;
  @Output() public code= new EventEmitter;
  @Output() public id= new EventEmitter;
  constructor(private publicationService:PublicationService) { }
  ngOnInit() { this.AllPublication();
  }

  AllPublication(){
    this.publicationService.afficherAllPublication().subscribe( data=>{
      this.publications=data;
      console.log(this.publications)},err=> {
        console.log(err)
      })
  }
  Jaime(id){
     this.id.emit(id);
    this.publicationService.afficherOnePulication(id).subscribe(data=>{
      console.log(id);
      this.publication=data;
      console.log(this.publication);
      this.publication.nbreJaime++;
      this.publicationService.updatePublication(id,this.publication).subscribe(data=>
        {this.AllPublication();
        },err=>{
           console.log(err);
        })
       },err=>
      {console.log(err)
        console.log(id);}
    )
  }
  commenter(id){
    this.code.emit(1);
    this.id.emit(id)
    console.log(this.id)}
}
