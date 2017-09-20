import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DragDropComponent implements OnInit {


  vegetables = [
    {name: 'Carrot', type: 'vegetable'},
    {name: 'Onion', type: 'vegetable'},
    {name: 'Potato', type: 'vegetable'},
    {name: 'Capsicum', type: 'vegetable'}];

  fruits = [
    {name: 'Apple', type: 'fruit'},
    {name: 'Orange', type: 'fruit'},
    {name: 'Mango', type: 'fruit'},
    {name: 'Banana', type: 'fruit'}];

    
  droppedFruits = [];
  droppedVegetables = [];
  droppedItems = [];
  fruitDropEnabled = true;
  dragEnabled = true;

  onFruitDrop(e: any) {
    this.droppedFruits.push(e.dragData);
    this.removeItem(e.dragData, this.fruits);
  }

  onVegetableDrop(e: any) {
    this.droppedVegetables.push(e.dragData);
    this.removeItem(e.dragData, this.vegetables);
  }

  onAnyDrop(e: any) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.type === 'vegetable') {
      this.removeItem(e.dragData, this.vegetables);
    } else {
      this.removeItem(e.dragData, this.fruits);
    }
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }



  constructor( dragdrop: Ng2DragDropModule) { }

  ngOnInit() {
  }

}
