import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/service.contact';
declare let L;
import '../../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'
@Component({
  selector: 'app-infirmerie-adresse',
  templateUrl: './infirmerie-adresse.component.html',
  styleUrls: ['./infirmerie-adresse.component.css']
})
export class InfirmerieAdresseComponent implements OnInit {
  private  adresseContact: string ='';
  private typeContact: string ='Infirmier';
  private infirmiers: any;
   private code: number =0;
   
  constructor(private contactservice:ContactService) { }

  ngOnInit() {
    
    //Liste de tout les infirmiers
    if(this.code == 0){
      this.contactservice.getTypeContact(this.typeContact)
              .subscribe(data =>{ 
                this.infirmiers = data; 
                console.log(this.infirmiers)}, err =>{
                  console.log(err);
                }
     )}
   
     }
  
  rechercheadresse(){
    this.code=1;
    console.log(this.adresseContact);
    this.contactservice.getAdresseContact(this.adresseContact,this.typeContact).subscribe(data=>{
      this.infirmiers = data;}, err=>{
         console.log(err)}
    )
  }
  voirCarte(){
    
     // map
     const map = L.map('map').setView([36.806099,10.17499], 10);
   
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const ariana = L.marker([36.866537,10.164723],{
      draggable:true,opacity:0.8
    }).addTo(map).bindPopup('<h3>Ahmed</h3>').openPopup();
    
   
   /*  L.Routing.control({
       waypoints: [                     [9.537499
         L.latLng(57.74, 10.94),
         L.latLng(57.6792, 11.949)
       ]
     }).addTo(map);*/       //const map=L.map('map',{center:[9.537499,33.886917],zoom:10});
     // L.tileLayer('http//{{s}}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
   
  }
 
}


