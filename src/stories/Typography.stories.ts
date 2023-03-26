import type { Meta, StoryObj } from '@storybook/vue3'
import Typography from './Typography.vue'
export default {
  title: 'Typography/Typography',
  component: Typography,
  argTypes: {
    fontFamily: { type: 'string' }
  }
} as Meta<typeof Typography>

type Story = StoryObj
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button'
  }
}

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large'
  }
}

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small'
  }
}
