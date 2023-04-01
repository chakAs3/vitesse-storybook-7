import { Preview , setup} from "@storybook/vue3";

import '@unocss/reset/tailwind.css'
import '~/styles/main.css'
import 'uno.css'

// https://github.com/antfu/vite-ssg

setup( (app)=>{
 
})
const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
