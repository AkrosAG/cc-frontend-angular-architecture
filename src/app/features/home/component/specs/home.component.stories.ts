import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '@featureshome/component/home.component';

const meta: Meta<HomeComponent> = {
  title: 'ccAngularArchitecutre/Home',
  component: HomeComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/angular/configure/story-layout
    //layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, HomeComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<HomeComponent>;

export const Empty: Story = {
  render: (args: HomeComponent) => ({
    props: args,
  }),
};
Empty.args = {};

export const Default: Story = {
  render: (args: HomeComponent) => ({
    props: args,
  }),
};
Default.args = {
  snippets: [
    { title: 'Title 1', content: 'Lorem ipsum 1' },
    { title: 'Title 2', content: 'Lorem ipsum 2' },
  ],
};
