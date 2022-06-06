import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  displayAll: boolean = true;
  acti: boolean = false;
  constructor() {}
  message = 'no message';
  style = 'color:green';
  model = new Model();
  getName() {
    return this.model.name;
  }
  ChangeColor(tbody: any, style: any) {
    for (let i = 0; i < tbody.children.length; i++) {
      let element = tbody.children[i];
      element.style.backgroundColor = 'white';
    }
    style.backgroundColor = 'springgreen';
  }
  ChangeTrueFalse(tbody: any, i: any) {
    for (let i = 0; i < tbody.children.length; i++) {
      let element = tbody.children[i];
      element.style.backgroundColor = 'white';
    }
    var s = this.getItems();
    
    this.model.items[i].action = !this.model.items[i].action;
  }

  addItem(value: string) {
    // this.message=value;
    // console.log(value);
    if (value != '') {
      this.model.items.push(new TodoItem(1, value, false));
      this.message = '';
      value = '';
    } else {
      alert('Please input info');
    }
  }
  getItem(index:any,descr:any,i:any){
    index.value=i;
    descr.value = this.model.items[i].description;
    this.acti = this.model.items[i].action;

  }
  Update(index:any,descr:any){
    this.model.items[index.value].description = descr.value;
    this.model.items[index.value].action = this.acti;
  }
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => item.action == false);
  }
}