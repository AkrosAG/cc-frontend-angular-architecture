import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CanvasJSAngularStockChartsModule} from '@canvasjs/angular-stockcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularStockChartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit {
  @Input() columnChartData: any[];
  @Input() bubbleChartData: any[];
  @Input() stockChartData: any[];
  @Input() doughnutChartData: any[];
  @Input() activeChart: number;

  columnChartOptions = {
    theme: 'light2',
    animationEnabled: true,
    title: {
      text: 'Income Comparsion of 2 Products',
    },
    axisX: {
      labelFontSize: 12,
      labelMaxWidth: 70,
    },
    axisY: {
      prefix: '$',
    },
    toolTip: {
      shared: true,
    },
    data: null,
  };

  bubbleChartOptions = {
    theme: 'light2',
    animationEnabled: true,
    title: {
      text: 'Waste Generation and Urbanization by Region',
    },
    axisX: {
      title: 'Urbanization Rate',
      titleFontSize: 13,
      suffix: '%',
    },
    axisY: {
      title: 'Waste Generation per capita (kg/capita/day)',
      titleFontSize: 13,
      includeZero: true,
    },
    data: null,
  };

  stockChartOptions = {
    exportEnabled: true,
    title: {
      text: 'Angular StockChart with Numeric Axis',
    },
    charts: [
      {
        data: null,
      },
    ],
    rangeSelector: {
      inputFields: {
        startValue: 200,
        endValue: 800,
      },
      buttons: [
        {
          label: '100',
          range: 100,
          rangeType: 'number',
        },
        {
          label: '200',
          range: 200,
          rangeType: 'number',
        },
        {
          label: '500',
          range: 500,
          rangeType: 'number',
        },
        {
          label: 'All',
          rangeType: 'all',
        },
      ],
    },
  };

  doughnutChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Project Cost Breakdown',
    },
    data: null,
  };

  ngOnInit(): void {
    this.columnChartOptions.data = this.columnChartData;
    this.bubbleChartOptions.data = this.bubbleChartData;
    this.stockChartOptions.charts = this.stockChartData;
    this.doughnutChartOptions.data = this.doughnutChartData;
  }
}
