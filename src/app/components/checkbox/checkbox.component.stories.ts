import type {Meta, StoryObj} from '@storybook/angular';
import {CheckboxComponent} from '@appcomponents/checkbox/checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'UI-Library/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        **Checkbox** is a special UI element created with angular material.

        - Sample for angular material showcase
        - Sample for Storybook, Loki and documentation
      `,
      },
    },
  }
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Primary: Story = {
  args: {
    checkboxes: [{"label":"info","value":false},{"label":"apples","value":true},{"label":"oranges","value":true},{"label":"peaches","value":false}],
  },
};
