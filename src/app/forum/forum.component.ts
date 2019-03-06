import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../service/service.publication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  private publications:any;
  private publication:any;
  private code:any=0;
  private id:any;
  constructor(private publicationService:PublicationService,private router:Router) { }
  ngOnInit() { }

  commenter(id){
    this.code=1;
  
  }
  
}