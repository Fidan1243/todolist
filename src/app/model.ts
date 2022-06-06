import { TodoItem } from "./todoitem";

export class Model{
    name:string;
    items:TodoItem[];
    constructor(){
        this.name = "Elvin";
        this.items = [
            new TodoItem(1,"Breakfast",true),
            new TodoItem(2,"Sport",false),
            new TodoItem(3,"Read Book",false),
            new TodoItem(4,"Write Code",true)
          ];
    }
}
