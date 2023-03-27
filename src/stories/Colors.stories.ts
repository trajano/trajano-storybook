import type { Meta, StoryObj } from '@storybook/vue3'
import Colors from './Colors.vue'
export default {
  title: 'Design/Colors',
  component: Colors,

  tags: ['autodocs']
} as Meta<typeof Colors>

type Story = StoryObj<typeof Colors>
export const Default: Story = {}
