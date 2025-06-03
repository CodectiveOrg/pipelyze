import type { Meta, StoryObj } from "@storybook/react";

import RadioGroupComponent from "./radio-group.component";

const meta = {
  title: "Atoms/RadioGroup",
  component: RadioGroupComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "text" },
      defaultValue: "group1",
    },
    row: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    items: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof RadioGroupComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "basic",
    row: true,
    items: [
      { color: "primary", size: "normal" },
      { color: "secondary", size: "small" },
      { color: "error", size: "normal", disabled: true },
    ],
  },
};

export const RowGroup: Story = {
  args: {
    name: "row-group",
    row: false,
    items: [
      { label: "defult", color: "success", size: "normal" },
      { label: "primary", color: "primary", size: "normal" },
      { label: "secondary", color: "secondary", size: "normal" },
      { label: "info", color: "info", size: "normal" },
      { label: "success", color: "success", size: "normal" },
      { label: "warning", color: "warning", size: "normal" },
      { label: "error", color: "error", size: "normal" },
      { label: "Disabled", size: "normal", disabled: true },
    ],
  },
};
