import type { Meta, StoryObj } from '@storybook/vue3'
import PhiSwatchVue from './PhiSwatch.vue'

// Define the component's props
interface MyComponentProps {
  baseColor: string
}

// Define the component's stories
export default {
  component: PhiSwatchVue,
  title: 'Components/PhiSwatch',
  argTypes: {
    baseColor: { control: 'color' }
  }
} as Meta<typeof PhiSwatchVue>

type Story = StoryObj<typeof PhiSwatchVue>
export const Default: Story = {
    args: {
        baseColor: "#ffff00"
    }
}
