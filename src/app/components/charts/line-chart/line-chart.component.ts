import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
 private chart ={
      type: "Line",
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [
          [0, 40, 60, 20 ]
        ]
      },
      options: {
        low: 0,
        showArea: true,
        fullWidth: true,
        height: "300px"
      },
      responsive:{

      }
    }

  private responsive(padding, offset){
    return [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value) {
          return value[0];
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
