import type { Preview } from '@storybook/react';
import '@radix-ui/themes/styles.css';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true, // 👈 Set this
    },
  },
  tags: ['autodocs'],
};

export default preview;
