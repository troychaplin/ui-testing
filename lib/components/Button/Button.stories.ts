import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Button',
    color: '#369173',
  },
}

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    isOutline: true,
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Button',
    color: '#7a2bcf',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Button',
    color: '#c4812f',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Button',
    color: '#2896b6',
  },
}
