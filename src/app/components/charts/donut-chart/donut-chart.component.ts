import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
private chart ={
      type: "Pie",
      data: {
        labels: ['Guests', 'Patrons', 'Staff', 'etc'],
        series: [ 30, 45, 15, 10 ]
      },
      options: {
        fullWidth: true,
        donut:true,
        donutWidth: 80,
        donutSolid:true,
        startAngle:270,
        total:200,
        showLabel: true,
        height: "360px"
      },
      responsive:{

      }, 
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
