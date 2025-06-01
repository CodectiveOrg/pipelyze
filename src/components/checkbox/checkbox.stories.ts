import type { Meta, StoryObj } from "@storybook/react";

import CheckboxComponent from "@/components/checkbox/checkbox.component";

const meta = {
  title: "Atoms/Checkbox",
  component: CheckboxComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["normal", "small"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "info", "success", "warning", "error"],
    },
  },
  args: {
    size: "normal",
    color: "primary",
  },
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    size: "normal",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
