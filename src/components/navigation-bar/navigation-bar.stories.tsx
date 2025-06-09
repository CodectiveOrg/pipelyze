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

export const Horizontal: Story = {
  args: {
    items: [
      {
        title: "Dashboard",
        icon: <IconComponent name="dashboard-line" />,
        active: true,
      },
      {
        title: "Profile",
        icon: <IconComponent name="bear-line" />,
      },
      {
        title: "Blog",
        icon: <IconComponent name="star-line" />,
      },
    ],
  },
};

export const Vertical: Story = {
  args: {
    variant: "vertical",
    items: [
      {
        title: "Dashboard",
        subtitle: "Charts and Graphs",
        icon: <IconComponent name="dashboard-line" />,
        active: true,
      },
      {
        title: "Profile",
        subtitle: "User Info",
        icon: <IconComponent name="bear-line" />,
      },
      {
        title: "Blog",
        icon: <IconComponent name="star-line" />,
      },
    ],
  },
};

export const Link: Story = {
  args: {
    variant: "vertical",
    items: [
      {
        title: "Dashboard",
        subtitle: "Charts and Graphs",
        icon: <IconComponent name="dashboard-line" />,
        href: "/dashboard",
        active: true,
      },
      {
        title: "Profile",
        subtitle: "User Info",
        icon: <IconComponent name="bear-line" />,
        href: "/user",
      },
      {
        title: "Blog",
        icon: <IconComponent name="star-line" />,
        href: "/blog",
      },
    ],
  },
};
