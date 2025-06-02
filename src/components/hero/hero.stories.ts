import type { Meta, StoryObj } from "@storybook/react";

import HeroComponent from "./hero.component";

const meta = {
  title: "Sections/Hero",
  component: HeroComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeroComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
