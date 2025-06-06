import type { Meta, StoryObj } from "@storybook/react";

import CheckBoxComponent from "./checkbox.component";

const meta = {
  title: "Atoms/radio",
  component: CheckBoxComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: [
        "inherit",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
    size: {
      control: { type: "radio" },
      options: ["normal", "small"],
    },
    label: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    color: "primary",
    size: "normal",
    label: "Select your option",
  },
} satisfies Meta<typeof CheckBoxComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "normal",
  },
};

export const Disabled: Story = {
  name: "Deactive",
  args: {
    disabled: true,
  },
};
