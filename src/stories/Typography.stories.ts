import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import Typography from './Typography.vue'
export default {
  title: 'Typography/Typography',
  component: Typography,
  argTypes: {
    fontFamily: {
      type: 'string',
      control: { type: 'select' },
      options: ['pt-sans', 'lexend', 'ibm-plex-sans', 'lato', 'roboto']
    }
  },
  tags: ['autodocs']
  // render: (args) => ({
  //   components: { Typography },
  //   setup: () => ({ args }),
  //   template: `<Typography v-bind="args"></Typography>`
  // })
} as Meta<typeof Typography>

export const Default: StoryFn<typeof Typography> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Typography },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup: () => ({ args }),
  template: '<typography v-bind="args" />'
})
