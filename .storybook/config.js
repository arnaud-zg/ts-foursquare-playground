import { configure } from '@storybook/react'

// automatically import all files ending in *.stories.ts or *.stories.tsx
const req = require.context('../stories', true, /\.stories\.(ts|tsx)$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
