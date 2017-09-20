import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export interface Itopicsearch { 
  title:string,
  topicList: Array<Itopic>
} 
export interface Itopic{
  description: string, 
  query: string
}

@Component({
  selector: 'Topic-Search',
  templateUrl: './topic-search.component.html',
  styleUrls: ['./topic-search.component.css']
})
export class TopicSearchComponent implements OnInit {
  @Input() headerTitle : any;
  @Input() rowClass : string;  
  @Input() TopicSearch: Array<Itopicsearch>;

// title, class, list of topic search { description, query }
  constructor() { }

  ngOnInit() {
  }

}



// https://stackoverflow.com/questions/40905499/where-to-put-interfaces-and-type-aliases

