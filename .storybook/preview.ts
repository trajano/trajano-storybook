import { DecoratorFunction } from '@storybook/types'
import type { Preview, VueRenderer } from '@storybook/vue3'
import '../src/assets/global.scss'

const withModeClassInBody: DecoratorFunction<VueRenderer> = (Story, context) => {
  const mode = context.globals.mode
  window.document.body.classList.remove(`mode--light`, `mode--dark`)
  window.document.body.classList.add(`mode--${mode}`)
  return { template: '<story/>' }
}
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  globalTypes: {
    mode: {
      name: 'Mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        // Change title based on selected value
        dynamicTitle: true
      }
    }
  },
  decorators: [withModeClassInBody]
}

export default preview
