import { Component, OnInit, ViewChild, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import * as Chartist from 'chartist';

//import {ChartistJsService} from './chartist.service';

@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.component.html',
  styleUrls: ['./chartist.component.css']
})
export class ChartistComponent implements OnInit {

  @Input() chartistType:string;
  @Input() chartistData:Object;
  @Input() chartistOptions:Object;
  @Input() chartistResponsive:Object;  
  @Output() onChartReady = new EventEmitter<any>();

  @ViewChild('Chartist') public _selector: ElementRef;

  private chart;

  public ngOnInit(){  
  }

  public ngAfterViewInit() {    
    this.chart = new Chartist[this.chartistType](this._selector.nativeElement, this.chartistData, this.chartistOptions, this.chartistResponsive);    
    this.onChartReady.emit(this.chart);
  }

  public ngOnChanges(changes) {
    if (this.chart) {
      (<any>this.chart).update(this.chartistData, this.chartistOptions);
    }
  }

  public ngOnDestroy():void {
    if (this.chart) {
      this.chart.detach();
    }
  }
}
