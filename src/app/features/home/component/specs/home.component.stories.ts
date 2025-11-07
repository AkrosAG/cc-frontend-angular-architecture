import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {HomeComponent} from '@featureshome/component/home.component';

const meta: Meta<HomeComponent> = {
  title: 'ccAngularArchitecture/Home',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      imports: [HomeComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<HomeComponent>;

export const Empty: Story = {
  args: {},
};

export const Default: Story = {
  args: {
    snippets: [
      { title: 'Title 1', content: 'Lorem ipsum 1' },
      { title: 'Title 2', content: 'Lorem ipsum 2' },
    ],
  },
};
