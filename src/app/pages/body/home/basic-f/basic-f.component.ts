import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-f',
  templateUrl: './basic-f.component.html',
  styleUrls: ['./basic-f.component.css']
})
export class BasicFComponent implements OnInit {


private SearchTopic = {
  title:"Popular Categories",
  topicList:[
    { description: "On-Order DVDs", query: "" },
    { description: "Art", query: "" },
    { description: "Architecture", query: "" },
    { description: "AutoBiography", query: "" },
    { description: "Body and Mind", query: "" },
    { description: "Cooking", query: "" },
    { description: "Design", query: "" },
    { description: "DVDs", query: "" },
    { description: "Gardening", query: "" },
    { description: "Health Fitness", query: "" },
    { description: "History", query: "" },
    { description: "House and Home", query: "" },
    { description: "Medical", query: "" },
    { description: "Music", query: "" },
    { description: "Pets", query: "" },
    { description: "Photography", query: "" },
    { description: "Self-help", query: "" },
    { description: "Travel", query: "" },
    { description: "Being Acquired", query: "" },
    { description: "Verso", query: "" },
    { description: "Slims", query: "" },
    { description: "Agent", query: "" },
    { description: "AG App", query: "" },
    { description: "Section 508", query: "" },
  ],
}







  constructor() { }

  ngOnInit() {
  }

}
