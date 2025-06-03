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
    row: {
      control: { type: "boolean" },
      row: false,
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
    name: "radio",
    row: false,
    items: [
      { color: "primary", size: "normal" },
      { color: "primary", size: "small" },
      { color: "error", size: "small", disabled: true },
    ],
  },
};

export const RowGroup: Story = {
  name: "Row",
  args: {
    name: "radio",
    row: true,
    items: [
      { label: "Normal", color: "primary", size: "normal" },
      { label: "Small", color: "primary", size: "small" },
    ],
  },
};

export const ColumnGroup: Story = {
  name: "Column",
  args: {
    name: "Color",
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
