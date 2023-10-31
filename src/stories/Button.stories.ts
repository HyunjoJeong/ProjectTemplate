import { colors } from '@/styles/colors';
import type { Meta, StoryObj } from '@storybook/react';

import Button from 'atoms/buttons/BaseButtons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atom/Button',
  component: Button,
  // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  parameters: { layout: 'centered' },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    padding: { control: 'text' },
    margin: { control: 'text' },
    border: { control: 'text' },
    borderRadius: { control: 'text' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: { children: 'Button' }
};

export const BluePrimary: Story = {
  args: {
    children: 'Button',
    backgroundColor: colors.blue.primary,
    primary: true
  }
};

export const BlueSecondary: Story = {
  args: {
    children: 'Button',
    backgroundColor: colors.blue.secondary,
    color: colors.blue.dark
  }
};

export const GreenPrimary: Story = {
  args: {
    children: 'Button',
    backgroundColor: colors.green.primary,
    primary: true
  }
};

export const GreenSecondary: Story = {
  args: {
    children: 'Button',
    backgroundColor: colors.green.secondary,
    color: colors.green.dark
  }
};

export const YellowPrimary: Story = {
  args: {
    children: 'Button',
    backgroundColor: colors.yellow.primary,
    primary: true
  }
};

export const YellowSecondary: Story = {
  args: {
    children: 'Button',
    backgroundColor: colors.yellow.secondary,
    color: colors.yellow.dark
  }
};

export const RedPrimary: Story = {
  args: {
    children: 'Button',
    backgroundColor: colors.red.primary,
    primary: true
  }
};

export const RedSecondary: Story = {
  args: {
    children: 'Button',
    backgroundColor: colors.red.secondary,
    color: colors.red.dark
  }
};
