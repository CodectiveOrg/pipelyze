import type { Meta, StoryObj } from "@storybook/react";

import IconComponent from "@/components/icon/icon.component";

const meta = {
  title: "Icon",
  component: IconComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["inherit", "primary", "info", "success", "warning", "error"],
    },
    fontSize: {
      control: {
        type: "range",
        min: 16,
        max: 72,
        step: 8,
      },
    },
  },
  args: {
    color: "inherit",
    fontSize: 72,
  },
} satisfies Meta<typeof IconComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Line: Story = {
  args: {
    name: "bear-line",
  },
};

export const Fill: Story = {
  args: {
    name: "bear-fill",
  },
};
