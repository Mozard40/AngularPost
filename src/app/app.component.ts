import { Component,OnInit,OnDestroy } from '@angular/core';
import { PostlistComponent } from './postlist/postlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog1'; 

  constructor(){

  }
  ngOnInit(){
    
  }
}
