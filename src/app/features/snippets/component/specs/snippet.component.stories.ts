import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SnippetComponent } from '../snippet.component';

const meta: Meta<SnippetComponent> = {
  title: 'ccAngularArchitecture/Snippets',
  component: SnippetComponent,
  decorators: [
    moduleMetadata({
      imports: [SnippetComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<SnippetComponent>;

export const Default: Story = {
  args: {
    snippet: { title: 'Title', content: 'Lorem ipsum' },
  },
};
