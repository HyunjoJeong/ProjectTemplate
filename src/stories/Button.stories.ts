import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '@/styles/colors';

import Button, {
  BluePrimaryButton,
  BlueSecondaryButton,
  RedPrimaryButton,
  RedSecondaryButton,
  YellowPrimaryButton,
  YellowSecondaryButton,
  GreenPrimaryButton,
  GreenSecondaryButton
} from '@/components/atoms/buttons/BaseButtons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atom/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    text: 'Button'
  }
};

export const BluePrimary: Story = {
  args: {
    text: 'Button',
    backgroundColor: colors.blue.primary,
    color: '#FFF'
  }
};

export const BlueSecondary: Story = {
  args: {
    text: 'Button',
    backgroundColor: colors.blue.secondary,
    color: colors.blue.dark
  }
};

export const GreenPrimary: Story = {
  args: {
    text: 'Button',
    backgroundColor: colors.green.primary,
    color: '#FFF'
  }
};

export const GreenSecondary: Story = {
  args: {
    text: 'Button',
    backgroundColor: colors.green.secondary,
    color: colors.green.dark
  }
};

export const YellowPrimary: Story = {
  args: {
    text: 'Button',
    backgroundColor: colors.yellow.primary,
    color: '#FFF'
  }
};

export const YellowSecondary: Story = {
  args: {
    text: 'Button',
    backgroundColor: colors.yellow.secondary,
    color: colors.yellow.dark
  }
};

export const RedPrimary: Story = {
  args: {
    text: 'Button',
    backgroundColor: colors.red.primary,
    color: '#FFF'
  }
};

export const RedSecondary: Story = {
  args: {
    text: 'Button',
    backgroundColor: colors.red.secondary,
    color: colors.red.dark
  }
};
