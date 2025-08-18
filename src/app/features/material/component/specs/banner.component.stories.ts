import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BannerComponent } from '@featuresmaterial/component/banner/banner.component';
import { BannerType } from '@featuresmaterial/component/banner/banner-type';

const meta: Meta<BannerComponent> = {
  title: 'UI-Library/Banner',
  component: BannerComponent,
  decorators: [
    moduleMetadata({
      imports: [BannerComponent],
    }),
  ],
  argTypes: {
    bannerType: {
      options: Object.values(BannerType),
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<BannerComponent>;

export const Primary: Story = {
  args: {
    text: 'Sample Banner text for Storybook',
    bannerType: BannerType.INFO,
  },
};
