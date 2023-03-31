import type { Meta, StoryObj } from '@storybook/vue3'
import Typography from './Typography.vue'
export default {
  title: 'Design/Typography',
  component: Typography,
  args: {
    fontFamily: ''
  },
  argTypes: {
    fontFamily: {
      type: 'string',
      control: { type: 'select' },
      options: [
        'pt-sans',
        'comic-neue',
        'ibm-plex-sans',
        'lato',
        'lexend',
        'montserrat',
        'noto-sans',
        'nunito-sans',
        'open-sans',
        'raleway',
        'recursive',
        'roboto',
        'source-sans-pro'
      ]
    }
  },
  tags: ['autodocs']
} as Meta<typeof Typography>

type Story = StoryObj<typeof Typography>
export const Default: Story = {}
