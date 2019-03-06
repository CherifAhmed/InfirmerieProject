import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { SocialComponent } from './social/social.component';
import { ForumComponent } from './forum/forum.component';
import { FindComponent } from './find/find.component';
import { AuxiliereComponent } from './auxiliere/auxiliere.component';
import { AccompagnantComponent } from './accompagnant/accompagnant.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CompteComponent } from './compte/compte.component';
import { ContactService } from './service/service.contact';
import { ListepublicationComponent } from './compte/listepublication/listepublication.component';
import { FairePublicationComponent } from './compte/faire-publication/faire-publication.component';
import { PublicationService } from './service/service.publication';
import { DescriptionComponent } from './acceuil/description/description.component';
import { InfirmierNomComponent } from './find/infirmier-nom/infirmier-nom.component';
import { InfirmerieAdresseComponent } from './find/infirmerie-adresse/infirmerie-adresse.component';
import { BoiteReceptionComponent } from './compte/boite-reception/boite-reception.component';
import { CommentaireComponent } from './forum/commentaire/commentaire.component';
import { PublicationforumComponent } from './forum/publicationforum/publicationforum.component';
import { AuthenticationService } from './service/authentication.service';
import { MessageService } from './service/service.message';
import { LoginComponent } from './login/login.component';
import { ConnectComponent } from './connect/connect.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AcceuilComponent,
    LoginComponent,
    ConnectComponent,
    SocialComponent,
    ForumComponent,
    FindComponent,
    AuxiliereComponent,
    AccompagnantComponent,
    CompteComponent,
    ListepublicationComponent,
    FairePublicationComponent,
    DescriptionComponent,
    InfirmierNomComponent,
    InfirmerieAdresseComponent,
    BoiteReceptionComponent,
    CommentaireComponent,
    PublicationforumComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ContactService,PublicationService,AuthenticationService,MessageService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
