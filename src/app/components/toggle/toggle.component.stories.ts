import type { Meta, StoryObj } from '@storybook/angular';
import { BannerComponent } from '@appcomponents/banner/banner.component';
import { BannerType } from '@appcomponents/banner/banner-type';
import {ButtonToggleComponent} from "@appcomponents/button-toggle/button-toggle.component";
import {InputComponent} from "@appcomponents/input/input.component";
import {TextareaComponent} from "@appcomponents/textarea/textarea.component";
import {ToggleComponent} from "@appcomponents/toggle/toggle.component";

const meta: Meta<ToggleComponent> = {
  title: 'UI-Library/Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        **Toggle** is a special UI element created with angular material.

        - Sample for angular material showcase
        - Sample for Storybook, Loki and documentation
      `,
      },
    }
  },
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Primary: Story = {
  args: {
    bannerEnabled: true,
  },
};
