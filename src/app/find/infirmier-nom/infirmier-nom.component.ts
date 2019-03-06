import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/service.contact';

@Component({
  selector: 'app-infirmier-nom',
  templateUrl: './infirmier-nom.component.html',
  styleUrls: ['./infirmier-nom.component.css']
})
export class InfirmierNomComponent implements OnInit {
  private  nomContact: string ='';
  private typeContact: string ='Infirmier';
  private infirmiers: any;
   private code: number =0;
   constructor (private contactservice:ContactService) { }

  ngOnInit() {
    if(this.code == 0){
    this.contactservice.getTypeContact(this.typeContact)
            .subscribe(data =>{ 
              this.infirmiers = data; 
              console.log(this.infirmiers)}, err =>{
                console.log(err);
              }
            )}
  }


  recherchenom(){
    this.code==1;
    console.log(this.nomContact);
    this.contactservice.getNomContact(this.nomContact,this.typeContact).subscribe(data=>{
      this.infirmiers = data;}, err=>{
         console.log(err)}
    )
  }
}
