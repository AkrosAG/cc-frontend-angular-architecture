import type {Meta, StoryObj} from '@storybook/angular';
import {ButtonToggleComponent} from '@appcomponents/button-toggle/button-toggle.component';

const meta: Meta<ButtonToggleComponent> = {
  title: 'UI-Library/ButtonToggle',
  component: ButtonToggleComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        **ButtonToggle** is a special UI element created with angular material.

        - Sample for angular material showcase
        - Sample for Storybook, Loki and documentation
      `,
      },
    }
  },
};

export default meta;
type Story = StoryObj<ButtonToggleComponent>;

export const Primary: Story = {
  args: {
    toggleValue: 5,
  },
};
