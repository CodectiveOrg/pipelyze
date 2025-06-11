import type { Meta, StoryObj } from "@storybook/react";

import { COLORS } from "@/types/color.type";

import CheckboxComponent from "./checkbox.component";

const meta = {
  title: "Atoms/Checkbox",
  component: CheckboxComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: COLORS,
    },
    size: {
      control: { type: "radio" },
      options: ["small", "normal"],
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
} satisfies Meta<typeof CheckboxComponent>;

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
