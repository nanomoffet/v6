import { Component, Input, OnInit } from '@angular/core';

var sum = function(a, b) { return a + b };
var percent = [ 25, 60, 15 ];

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() pieHeight: string = "200px";


  private chart ={
      type: "Pie",
      data: {
        labels: ['Guests', 'Patrons', 'Staff'],
        series: [ 35, 40, 25 ]
      },
      options: {
        fullWidth: true,
        //height: "300px",
        height: this.pieHeight,
        //animateScale: true
      },
      responsive:{

      }
    }

  private responsive(padding, offset){
    return [
      ['screen and (min-width: 576px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (min-width: 768px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (min-width: 992px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }]
    ];
  }

  constructor() { }

  ngOnInit() {
  }

  getResponsive(padding, offset) {
    return this.responsive(padding, offset);
  }
}
