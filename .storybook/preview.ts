import type { Preview } from '@storybook/react'
import '../lib/styles.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Get Started',
          ['Introduction', 'Changelog'],
          'Examples',
          [
            'Blocks',
            'Layouts',
          ],
          'Projects',
          ['Event Calendar', ['Homepage', 'Single Event']],
          'Components',
          'Resources',
          'Layouts',
          ['Body', 'Main', 'Container', 'Article', 'Column', 'Aside', 'Panel', 'Stacked List'],
          'Deprecated',
        ],
      },
    },
  },
}

export default preview
