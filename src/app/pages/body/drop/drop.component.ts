import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-dnd',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css'],

})
export class DropComponent implements OnInit {
  public listOne = [
    'Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water',
    'Dos Equis', 'Newcastle', 'Ballast Point', 'Samual Adams Octoberfest', '190 Antifreeze'


  ];
  public listTwo = [
{
  "illrequest": [
          {
              "idfor": "coffee",
              "order": 1,
              "label": "Coffee",
              "type": [
                  {
                  "oneLab": "input",
                  "oneVal": "value",
                  "twoLab": "input",
                  "twoVal": "value",
                  "threeLab": "input",
                  "threeVal": "value",
                  }
                      ]
          },
                    {
              "idfor": "redwine",
              "order": 2,
              "label": "Red Wine",
              "type": [
                  {
                  "oneLab": "input",
                  "oneVal": "value",
                  "twoLab": "input",
                  "twoVal": "value",
                  "threeLab": "input",
                  "threeVal": "value",
                  }
                      ]
          },
                    {
              "idfor": "oj",
              "order": 3,
              "label": "Orange Juice",
              "type": [
                  {
                  "oneLab": "input",
                  "oneVal": "value",
                  "twoLab": "input",
                  "twoVal": "value",
                  "threeLab": "input",
                  "threeVal": "value",
                  }
                      ]
          },
                ]
}];

  
  constructor() { }


  ngOnInit() {
    // still need to validate the information.
    // find the sort() function with compare to set the input variable.
    console.log(this.listTwo);


  }

}
