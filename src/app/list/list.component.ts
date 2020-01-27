import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() lists = [];
  delTask(myTask)
  {
    this.lists.splice(myTask,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
