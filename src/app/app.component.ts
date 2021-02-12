import { Component, OnInit} from '@angular/core';
import { GitHubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private gitHubService:GitHubService) { }

  ngOnInit(){
    this.gitHubService.getCommitHistory().subscribe(data=>{
     
    });
  }
}
