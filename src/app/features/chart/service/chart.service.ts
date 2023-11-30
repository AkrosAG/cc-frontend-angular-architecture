import { Injectable } from '@angular/core';
import { NavItem } from '@appfeatures/sidenav/component/api/nav-item';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  chartLinks$: Observable<NavItem[]> = of([
    {
      label: 'Multi Series Waterfall Chart',
      id: 3,
      path: '/chart/column',
      isChart: true,
    },
    { label: 'Bubble Chart', id: 4, path: '/chart/bubble', isChart: true },
    {
      label: 'Stock Chart with Navigator & Range Selector',
      id: 5,
      path: '/chart/stock',
      isChart: true,
    },
    { label: 'Doughnut Chart', id: 6, path: '/chart/doughnut', isChart: true },
  ]);
  activeChartSubject$: BehaviorSubject<number> = new BehaviorSubject(0);
  activeChart$ = this.activeChartSubject$.asObservable();

  columnChartData$: Observable<any[]> = of([
    {
      type: 'waterfall',
      yValueFormatString: '$#,##0',
      name: 'Product A',
      showInLegend: true,
      indexLabelFontColor: 'black',
      indexLabelOrientation: 'vertical',
      dataPoints: [
        { label: 'Net Revenue', y: 220631, indexLabel: '{y}' },
        { label: 'Inventory', y: -95000 },
        { label: 'Merchandise', y: -18900 },
        { label: 'Other Sales Cost', y: -10990 },
        {
          label: 'Gross Income',
          isIntermediateSum: true,
          color: '#C7C7C7',
          indexLabel: '{y}',
        },
        { label: 'Staff', y: -24500 },
        { label: 'Marketing', y: -8000 },
        { label: 'Other Facilities', y: -25100 },
        { label: 'Operating Income', isCumulativeSum: true, color: '#C7C7C7' },
        { label: 'Taxes', y: -3500 },
        { label: 'Net Income', isCumulativeSum: true, indexLabel: '{y}' },
      ],
    },
    {
      type: 'waterfall',
      yValueFormatString: '$#,##0',
      name: 'Product B',
      showInLegend: true,
      indexLabelFontColor: 'black',
      indexLabelOrientation: 'vertical',
      risingColor: '#81C784',
      color: '#81C784',
      fallingColor: '#E57373',
      dataPoints: [
        { label: 'Net Revenue', y: 176504, indexLabel: '{y}' },
        { label: 'Inventory', y: -76000 },
        { label: 'Merchandise', y: -15120 },
        { label: 'Other Sales Cost', y: -8792 },
        {
          label: 'Gross Income',
          isIntermediateSum: true,
          color: '#E0E0E0',
          indexLabel: '{y}',
        },
        { label: 'Staff', y: -19600 },
        { label: 'Marketing', y: -6400 },
        { label: 'Other Facilities', y: -20080 },
        { label: 'Operating Income', isCumulativeSum: true, color: '#E0E0E0' },
        { label: 'Taxes', y: -2800 },
        { label: 'Net Income', isCumulativeSum: true, indexLabel: '{y}' },
      ],
    },
  ]);

  bubbleChartData$: Observable<any[]> = of([
    {
      type: 'bubble',
      indexLabel: '{z}',
      color: '#8ecbc7',
      toolTipContent:
        "<span style='\"'color: {color};'\"'>{name}</span> <br/> {x}: {y}, {z}",
      dataPoints: [
        { x: 35, y: 0.5, z: 334, name: 'South Asia' },
        { x: 38, y: 0.5, z: 174, name: 'Sub-Saharan Africa' },
        { x: 57, y: 0.5, z: 468, name: 'East Asia and Pacific' },
        { x: 64, y: 0.7, z: 129, name: 'Middle East and North Africa' },
        { x: 70, y: 1.25, z: 392, name: 'Europe and Central Asia' },
        { x: 80, y: 1, z: 231, name: 'Latin America' },
        { x: 82, y: 2.21, z: 289, name: 'North America' },
      ],
    },
  ]);

  stockChartData$: Observable<any[]> = of([
    {
      data: [
        {
          type: 'line',
          dataPoints: this.generateRandomData(),
        },
      ],
    },
  ]);

  doughnutChartData$: Observable<any[]> = of([
    {
      type: 'doughnut',
      yValueFormatString: "#,###.##'%'",
      indexLabel: '{name}',
      dataPoints: [
        { y: 28, name: 'Labour' },
        { y: 10, name: 'Legal' },
        { y: 20, name: 'Production' },
        { y: 15, name: 'License' },
        { y: 23, name: 'Facilities' },
        { y: 17, name: 'Taxes' },
        { y: 12, name: 'Insurance' },
      ],
    },
  ]);

  private generateRandomData() {
    let y = 1000;
    const dps = [];
    for (let i = 0; i < 1000; i++) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dps.push({ y: y });
    }
    return dps;
  }
}
