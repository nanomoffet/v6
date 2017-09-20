import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import {DragulaService, DragulaDirective} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'dragula',
  template: './dragulaP.component.html',
  styleUrls: ['./dragulaP.component.css'],
  encapsulation: ViewEncapsulation.None,
  //directives: [Dragula],
  viewProviders: [DragulaService],
})
export class DragulaComponent implements OnInit  {

static _debug:boolean = false;
  _debug:boolean = DragulaComponent._debug;

  static _siblingMap: Map<string, AllowedSiblings> ;

    A_prev: string[] = [];
    A_next: string[] = ["B","C","D","E"];
    B_prev: string[] = ["A","B","D"];
    B_next: string[] = ["B","C","D","E"];
    C_prev: string[] = ["A","B","D"];
    C_next: string[] = ["E"];
    D_prev  = ["A","B","D"];
    D_next: string[] = ["B","C","D","E"];
    E_prev  = ["A","B","C","D"];
    E_next: string[] = [];


constructor(private dragulaService: DragulaService) { 
    if(DragulaComponent._siblingMap == null)
        {
          this.setupSiblingMap();
        }
    dragulaService.setOptions('editor-bag',{
      isContainer: function(el) {
        return false;
      },
      moves: function(el, container, handle) {
        return true;//handle.classList.contains('master');
      },
      accepts: function(el, target, source, sibling) {
        var fn_debug = true;
        var acceptAll = false;
        if(!acceptAll)
        {
          if(this._debug || fn_debug) {
            console.log("accepts() start el, target, source, sibling");
            console.log({el,target,source,sibling});
          }
          if(target.classList.contains('master')){
            return false;
          }
          if(sibling==null) {
            return (target.children.length == 0);
          }
          var name:string = el.innerText;
          return DragulaComponent.areAllowedSiblings(name,sibling);
        }
        return acceptAll;
      },
      invalid: function (el, handle) {
        return false; // don't prevent any drags from initiating by default
      },
      direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
      copy: function(el,source) {
        if(this._debug) {
          console.log("copy() start");
          console.log(el);
          console.log(source);
          console.log("copy() stop");
        }
        return source.classList.contains('master');
      },                       // elements are moved by default, not copied
      copySortSource: false,             // elements in copy-source containers can be reordered
      revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
      removeOnSpill: true,              // spilling will `.remove` the element, if this is true
      mirrorContainer: document.body,    // set the element that gets mirror elements appended
      ignoreInputTextSelection: true     // allows users to select input text, see details below
    })
  }

  ngOnInit() {
    
     this.dragulaService.drag.subscribe((value:any) => {
         if(this._debug) {
          console.log("drag start");
          console.log(value);
          console.log("drag stop");
          console.log(`drag: ${value[0]}`);
         }
         this.onDrag(value.slice(1));
    });

    this.dragulaService.drop.subscribe((value:any) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    
    this.dragulaService.over.subscribe((value:any) => {
       if(this._debug) { console.log(`over: ${value[0]}`);}
      this.onOver(value.slice(1));
    });
    
    this.dragulaService.out.subscribe((value:any) => {
       if(this._debug) {console.log(`out: ${value[0]}`);}
      this.onOut(value.slice(1));
    });
  }

  private hasClass(el:any, name:string):any {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el:any, name:string):void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el:any, name:string):void {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), ' ');
    }
  }

  private onDrag(args:any):void {
    let [e] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args:any):void {
    let [e] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args:any):void {
    let [el] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args:any):void {
    let [el] = args;
    this.removeClass(el, 'ex-over');
  }

  private static areAllowedSiblings(name:string,sibling:any):boolean {
    // return true;
    var fn_debug: boolean = false;
    var isValid:boolean = true;
  
    var nextSibling = sibling.nextSibling;
    var prevSibling = sibling.previousSibling;
    var allowedSiblings: AllowedSiblings = null;
    var debugMsg = "";
    if( DragulaComponent._siblingMap!=null) {
      debugMsg+=("1:"+isValid);
      if(isValid) {
          allowedSiblings = DragulaComponent._siblingMap.get(name);
          isValid = (allowedSiblings!=null);
          if(this._debug || fn_debug) {
            console.log("allowedSiblings");
            console.log(allowedSiblings);
          }
          debugMsg+=(",2:"+isValid);
      }
      if(isValid) {
          if(this._debug || fn_debug) {
            console.log("nextSibling");
            console.log(nextSibling);
          }
        isValid = DragulaComponent.isAllowedSibling(nextSibling,allowedSiblings.nextSiblings);
        debugMsg+=(",3:"+isValid);
      }
      if(isValid) {
          if(this._debug || fn_debug) {
            console.log("prevSibling");
            console.log(prevSibling);
          }
        isValid = DragulaComponent.isAllowedSibling(prevSibling,allowedSiblings.prevSiblings);
        debugMsg+=(",4:"+isValid);
      }
    }
    if(this._debug || fn_debug) {
      console.log("isValid:"+ debugMsg);
    }
    fn_debug = false;
    return isValid;
  }

  private static isAllowedSibling(siblingNode, allowedSiblingArray: string[]):boolean {
    var isValid:boolean = false;
    if(siblingNode == null)
    {
      return true;
    }
    if(siblingNode.nodeName == "#text")
    {
      return true;
    }
    if (allowedSiblingArray.indexOf(siblingNode.innerText)>-1)
    {
      isValid=true;
    }
    return isValid;
  }

  private setupSiblingMap() {
    DragulaComponent._siblingMap = new Map<string, AllowedSiblings>();
  
    DragulaComponent._siblingMap.set("A", new AllowedSiblings("A",this.A_prev,this.A_next ));
    DragulaComponent._siblingMap.set("B", new AllowedSiblings("B",this.B_prev,this.B_next ));
    DragulaComponent._siblingMap.set("C", new AllowedSiblings("C",this.C_prev,this.C_next ));
    DragulaComponent._siblingMap.set("D", new AllowedSiblings("D",this.D_prev,this.D_next ));
    DragulaComponent._siblingMap.set("E", new AllowedSiblings("E",this.E_prev,this.E_next ));
    // if(this._debug) {
    if(true) {
      console.log(DragulaComponent._siblingMap);
    }
  }
}

export class AllowedSiblings {
  @Input() name:string;
  @Input() prevSiblings: string[];
  @Input() nextSiblings: string[];

  constructor(name:string,
              prevSiblings: string[],
              nextSiblings: string[]) {
    this.name=name;
    this.prevSiblings=prevSiblings;
    this.nextSiblings=nextSiblings;
  }

}