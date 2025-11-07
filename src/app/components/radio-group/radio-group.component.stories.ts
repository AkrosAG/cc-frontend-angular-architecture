import type {Meta, StoryObj} from '@storybook/angular';
import {BannerType} from '@appcomponents/banner/banner-type';
import {RadioGroupComponent} from '@appcomponents/radio-group/radio-group.component';

const meta: Meta<RadioGroupComponent> = {
  title: 'UI-Library/RadioGroup',
  component: RadioGroupComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        **RadioGroup** is a special UI element created with angular material.

        - Sample for angular material showcase
        - Sample for Storybook, Loki and documentation
      `,
      },
    }
  },
};

export default meta;
type Story = StoryObj<RadioGroupComponent>;

export const Success: Story = {
  args: {
    selectedBannerType: BannerType.SUCCESS,
  },
};
