import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-App';
  storedPosts=[];
  onAddToDO(post: any){
    this.storedPosts.push(post);
}
}
