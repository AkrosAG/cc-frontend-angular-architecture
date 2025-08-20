import type { Meta, StoryObj } from '@storybook/angular';
import { BannerComponent } from '@appcomponents/banner/banner.component';
import { BannerType } from '@appcomponents/banner/banner-type';
import {ButtonToggleComponent} from "@appcomponents/button-toggle/button-toggle.component";
import {InputComponent} from "@appcomponents/input/input.component";

const meta: Meta<InputComponent> = {
  title: 'UI-Library/Input',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        **Input** is a special UI element created with angular material.

        - Sample for angular material showcase
        - Sample for Storybook, Loki and documentation
      `,
      },
    }
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    bannerValue: "Story input",
  },
};
