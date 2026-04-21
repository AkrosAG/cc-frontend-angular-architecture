import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {ChartComponent} from '@featureschart/component/chart.component';

const meta: Meta<ChartComponent> = {
  title: 'Pages/Charts',
  component: ChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<ChartComponent>;

export const Columns: Story = {
  args: {
   activeChart: 3,
    columnChartData: [
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
    ]
  },
};
