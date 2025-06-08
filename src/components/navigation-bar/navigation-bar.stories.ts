import type { Meta, StoryObj } from "@storybook/react";

import NavigationBarComponent from "@/components/navigation-bar/navigation-bar.component";

const meta = {
  title: "Atoms/Navigation Bar",
  component: NavigationBarComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NavigationBarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Nav: Story = {
  args: {
    items: [],
  },
};
