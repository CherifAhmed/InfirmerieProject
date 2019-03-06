import { Component, Input, OnChanges, Output,EventEmitter } from '@angular/core';
import { PublicationService } from 'src/app/service/service.publication';
import { Publication } from 'src/app/Model/Model.Publication';
import { Router } from '@angular/router';



@Component({
  selector: 'app-faire-publication',
  templateUrl: './faire-publication.component.html',
  styleUrls: ['./faire-publication.component.css']
})
export class FairePublicationComponent implements OnChanges {
  private id:number=0;
  @Input() contact: any;
  @Output() childEvent = new EventEmitter();
  private publication:Publication = new Publication();
  private reponse: any;
  private code : number=0;
  selectedFile:File=null;
    constructor(private publicationService:PublicationService, private router: Router) { }

    ngOnChanges() {
      console.log("!!!!!!!!!");
    console.log(this.contact);
    console.log("!!!!!!!");
  }
  onsave(){
    this.publication.contact = this.contact;
    const pub =  JSON.stringify(this.publication);
    const formData = new FormData();
    formData.append('pub',pub);console.log(formData);
    formData.append('file',this.selectedFile,this.selectedFile.name);
    this.publicationService.savePublication(formData).subscribe(data =>{
    console.log(data);
    console.log(this.contact.id);
      this.reponse = data;
      this.childEvent.emit(this.reponse);
      this.code=1;    
    }, err=> {console.log(err);}
    )
    }

    onFileSelected(event){
    
      this.selectedFile=<File>event.target.files[0];
      console.log(this.selectedFile);
      }
  
}