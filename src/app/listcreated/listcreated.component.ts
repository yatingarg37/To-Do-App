import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-listcreated',
  templateUrl: './listcreated.component.html',
  styleUrls: ['./listcreated.component.css']
})
export class ListcreatedComponent implements OnInit {
  @Output() enterTodo=new EventEmitter();
  enterTitle="";
  enterNotes="";
  enterPer="";
  onAddToDO(){
    const todo={title: this.enterTitle,notes: this.enterNotes,per:this.enterPer}
    console.log(todo)
    this.enterTodo.emit(todo)
  }
  constructor() { }

  ngOnInit() {
  }

}
