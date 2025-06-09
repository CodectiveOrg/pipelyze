import type { Meta, StoryObj } from "@storybook/react";

import IconComponent from "@/components/icon/icon.component";
import NavigationBarComponent from "@/components/navigation-bar/navigation-bar.component";

const meta = {
  title: "Atoms/NavigationBar",
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
    items: [
      {
        title: "Title",
        subtitle: "Subtitle",
        icon: <IconComponent name="menu-line" />,
      },
    ],
  },
};
