import type { Meta, StoryObj } from "@storybook/react";

import ButtonComponent from "@/components/button/button.component";

const meta = {
  title: "Atoms/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    color: {
      control: "select",
      options: ["inherit", "primary", "info", "success", "warning", "error"],
    },
    fontSize: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    variant: "contained",
    color: "primary",
    fontSize: "medium",
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "click me",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "click me",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "click me",
  },
};
