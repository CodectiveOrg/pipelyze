import { Inter } from "next/font/google";

import type { Preview } from "@storybook/react";

import "../src/app/globals.css";
import "../src/styles/colors.css";
import "../src/styles/shadows.css";
import "../src/styles/shape.css";
import "../src/styles/typography.css";
import "./preview.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
