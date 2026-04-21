import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {MaterialComponent} from '@featuresmaterial/component/material.component';
import {BannerType} from '@appcomponents/banner/banner-type';

const meta: Meta<MaterialComponent> = {
  title: 'Pages/Material Playground',
  component: MaterialComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<MaterialComponent>;

export const Empty: Story = {
  args: {},
};

export const Default: Story = {
  args: {
    toggleValue: 1,
    showBanner: true,
    bannerEnabled: true,
    textareaValue: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
    bannerValue: 'Hello Banner!',
    selectedBannerType: BannerType.INFO,
    buttonToggleValues: [
      {label: "Awful", value: 1},
      {label: "Bad", value: 2},
      {label: "Acceptable", value: 3},
      {label: "Good", value: 4},
      {label: "Amazing", value: 5},
    ],
    checkboxes:  [
      {label: "info", value: false},
      {label: "apples", value: true},
      {label: "oranges", value: true},
      {label: "peaches", value: false},
    ],
    radioGroupValues: [
      {label: "Info", value: BannerType.INFO},
      {label: "Warning", value: BannerType.WARNING},
      {label: "Error", value: BannerType.ERROR},
      {label: "Success", value: BannerType.SUCCESS},
    ],
  },
};

