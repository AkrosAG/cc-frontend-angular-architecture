import type {Meta, StoryObj} from '@storybook/angular';
import {TextareaComponent} from '@appcomponents/textarea/textarea.component';

const meta: Meta<TextareaComponent> = {
  title: 'UI-Library/Textarea',
  component: TextareaComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        **Textarea** is a special UI element created with angular material.

        - Sample for angular material showcase
        - Sample for Storybook, Loki and documentation
      `,
      },
    }
  },
};

export default meta;
type Story = StoryObj<TextareaComponent>;

export const Primary: Story = {
  args: {
    textareaValue: "Story textarea input",
  },
};
