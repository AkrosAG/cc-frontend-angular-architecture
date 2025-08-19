import type { Meta, StoryObj } from '@storybook/angular';
import { BannerComponent } from '@appcomponents/banner/banner.component';
import { BannerType } from '@appcomponents/banner/banner-type';

const meta: Meta<BannerComponent> = {
  title: 'UI-Library/Banner',
  component: BannerComponent,
  tags: ['autodocs'],
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
