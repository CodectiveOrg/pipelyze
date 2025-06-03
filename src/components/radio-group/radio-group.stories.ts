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
    name: "shipment",
    row: false,
    items: [
      { label: "Standard (3-5 days)" },
      { label: "Express (1-2 days)" },
      { label: "Next Day (Disabled)", disabled: true },
    ],
  },
};

export const Row: Story = {
  args: {
    name: "gender",
    row: true,
    items: [{ label: "Male" }, { label: "Female" }],
  },
};

export const Column: Story = {
  args: {
    name: "color",
    row: false,
    items: [
      { label: "Default", color: "inherit", size: "normal" },
      { label: "Primary", color: "primary", size: "normal" },
      { label: "Secondary", color: "secondary", size: "normal" },
      { label: "Info", color: "info", size: "normal" },
      { label: "Success", color: "success", size: "normal" },
      { label: "Warning", color: "warning", size: "normal" },
      { label: "Error", color: "error", size: "normal" },
      { label: "Disabled", size: "normal", disabled: true },
    ],
  },
};
