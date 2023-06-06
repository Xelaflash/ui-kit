import type { Meta, StoryObj } from '@storybook/react';

import { SlidingNav } from './SlidingNav';

const meta: Meta<typeof SlidingNav> = {
  title: 'UI KIT/Sliding Nav',
  component: SlidingNav,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    overlayColor: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SlidingNav>;

export const SampleNav: Story = {};
