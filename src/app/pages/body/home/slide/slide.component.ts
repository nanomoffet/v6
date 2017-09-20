import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit {


private SearchTopic1 = {
  title:"Written by Author Suzanne Collins",
  topicList:[
    { description: "The hunger games", query: "" },
    { description: "Mockingjay", query: "" },
    { description: "Catching Fire", query: "" },
    { description: "Gregor and the marks of secret", query: "" },
    { description: "Gregor and the code of Claw", query: "" },
    { description: "Gregor and the curse of the warmbloods", query: "" },
    { description: "Gregor de las tierras altas", query: "" },
    { description: "Gregor y la profecía de la destrucción", query: "" },
    { description: "Los juegos del hambre", query: "" },
    { description: "Gregor the Overlander", query: "" },
    { description: "Gregor and the Prophecy of Bane", query: "" },
    { description: "The world of the Hunger Games", query: "" },
    { description: "Sinsajo", query: "" },
    { description: "En llamas", query: "" },
    { description: "When Charlie McButton lost power", query: "" },
    { description: "Working Towards Independence : Practical", query: "" },
    { description: "Couples and money : why money interferes", query: "" },
    { description: "Little Bear", query: "" }
  ],
}

private SearchTopic2 = {
  title:"Popular Searches",
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
