import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  },
  args: { primary: false }, // default value
  parameters: {
    docs: {
      description: {
        component: `This is a button.  Well from the example.  I do plan to change this up a bit.  For one I would likely use a rounded rectangle than a pill shape, since pill shape apply a larger width.  I also would NOT have a background which seems contrary to most other designs, I do like the idea of a ghost button which is what Windows 2.x did look like back in the day with 2 color CGA screens.  The idea is to make
        sure the focus is on the content and not on the buttons themselves.  I find that the buttons do distract from the content with Material.  iOS at least keeps the buttons away from the main
        area but goes too far in that they remove any semblance of a button. 
        
Let's put it this way, a lot of people used the same widget sets with limited colors way back when, I don't see anything wrong with revisiting that look.

But for text fields, I do like Material's style in terms of screen real estate so I may be keeping those.  The one thing I somewhat disagree with is the animation.  
I like to keep animations to a minimum at least on input.  The idea being focus is on entering the data rather that eye candy.

Initial thoughts are
1. thicker border when focused.
2. default action would have the "hyperlink" color.
3. other actions would have the "neutral" color.
4. the border and the text share the same color.
5. border is rounded.
6. Button height would be the same as text line height + bottom gap so the gap height would be the same top and bottom?
7. width would have padding of 2x the bottom gap on each side.
8. The last two are the minimum size for the button and the buttons may expand to fit its width for consistency.

Pondering on the notion should buttons indicate direction as well?
`
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}

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
