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
    },
    darkMode: {
      classTarget: 'body',
      darkClass: 'mode--dark',
      lightClass: 'mode--light',
      stylePreview: true
    }
  },
  // globalTypes: {
  //   mode: {
  //     name: 'Mode',
  //     defaultValue: 'light',
  //     toolbar: {
  //       icon: 'circlehollow',
  //       type: 'radio',
  //       items: [
  //         { value: 'light', icon: 'circlehollow', title: 'Light' },
  //         { value: 'dark', icon: 'circle', title: 'Dark' }
  //       ],
  //       dynamicTitle: true
  //     }
  //   }
  // },
  // decorators: [withModeClassInBody]
}

export default preview
