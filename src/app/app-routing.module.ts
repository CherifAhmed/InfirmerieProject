import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { SocialComponent } from './social/social.component';
import { ForumComponent } from './forum/forum.component';
import { FindComponent } from './find/find.component';
import { AuxiliereComponent } from './auxiliere/auxiliere.component';
import { AccompagnantComponent } from './accompagnant/accompagnant.component';
import { CompteComponent } from './compte/compte.component';
import { ListepublicationComponent } from './compte/listepublication/listepublication.component';
import { FairePublicationComponent } from './compte/faire-publication/faire-publication.component';
import { DescriptionComponent } from './acceuil/description/description.component';
import { InfirmierNomComponent } from './find/infirmier-nom/infirmier-nom.component';
import { InfirmerieAdresseComponent } from './find/infirmerie-adresse/infirmerie-adresse.component';
import { CommentaireComponent } from './forum/commentaire/commentaire.component';
import { PublicationforumComponent } from './forum/publicationforum/publicationforum.component';
import { ConnectComponent } from './connect/connect.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
   {path: 'nav', component: NavComponent},
   {path: 'login', component: LoginComponent},
   {path: 'connect', component: ConnectComponent},
   {path: 'accueil', component: AcceuilComponent},
   {path:'decrire',component:DescriptionComponent},
   {path: 'social', component: SocialComponent},
   {path: 'forum', component: ForumComponent,
   children:[
   {path:'commentaire',component:CommentaireComponent},
   {path:'listpublication',component:PublicationforumComponent},
   {path:'',component:PublicationforumComponent},
  ]},
   {path: 'Infirmier', component:FindComponent,
   children:[
     {path:'nom',component:InfirmierNomComponent},
     {path:'adresse',component:InfirmerieAdresseComponent},
     {path:'', component:InfirmierNomComponent}
   ]},
   {path: 'auxvie', component:AuxiliereComponent},
   {path: 'accompagnant', component:AccompagnantComponent},
   {path: 'compte',component:CompteComponent,
    children:[
     {path:'publications', component:ListepublicationComponent},
     {path:'', component:FairePublicationComponent}
   ]},
   {path:'',redirectTo:'accueil',pathMatch:'full'}
   ];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
