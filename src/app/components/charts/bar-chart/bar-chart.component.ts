import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],  
})
export class BarChartComponent implements OnInit {
  private chart ={
      type: "Bar",
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [15, 24, 43, 27, 5, 10, 23, 44, 68, 50, 26, 8],
          [13, 22, 49, 22, 4, 6, 24, 46, 57, 48, 22, 4]
        ]
      },
      options: {
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
