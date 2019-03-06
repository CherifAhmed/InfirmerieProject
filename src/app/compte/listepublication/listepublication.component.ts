import { Component, OnChanges, Input } from '@angular/core';
import { PublicationService } from 'src/app/service/service.publication';


@Component({
  selector: 'app-listepublication',
  templateUrl: './listepublication.component.html',
  styleUrls: ['./listepublication.component.css']
})
export class ListepublicationComponent implements OnChanges{
@Input() contact:any;

private publications:any;
private dateNow: Date=new Date();
private diffDays: number=0;
private diff: number;
  constructor(private publicationservice:PublicationService) { }

  ngOnChanges() {
    console.log("??????");
    console.log(this.contact);
    console.log("??????");
    this.publicationservice.afficherPublication(this.contact.id).subscribe(data =>
      {this.publications = data;
      console.log(this.publications)
      }, err=> {console.log(err)})
  }
  /*
  calculdate(){
    this.diff = Math.abs(this.dateNow.getTime() - this.publications.content.datePublication.getTime());
    this.diffDays = Math.ceil(this.diff / (1000 * 3600 * 24));
    this.publications.content.datePublication = this.diff;
console.log(this.diffDays);*/
  //}
}
