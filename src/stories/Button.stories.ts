import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'UI KIT/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: 'primary',
    label: 'Click Me!',
  },
};

export const Ghost: Story = {
  args: {
    primary: 'ghost',
    label: 'Click Me!',
  },
};

export const Gradient: Story = {
  args: {
    primary: 'gradient',
    size: 'large',
    label: 'Click Me!',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Click Me!',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Click Me!',
  },
};
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Click Me!',
  },
};
