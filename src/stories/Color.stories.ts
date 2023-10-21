import type { Meta, StoryObj } from '@storybook/react';
import ColorPalette from './스토리전용/ColorPalette';

const meta = {
  title: 'ColorPalette',
  component: ColorPalette
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const colorPalette: Story = {};
