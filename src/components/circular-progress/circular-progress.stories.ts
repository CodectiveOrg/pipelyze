import type { Meta, StoryObj } from "@storybook/react";

import CircularProgressComponent from "@/components/circular-progress/circular-progress.component";

const meta = {
  title: "Atoms/CircularProgress",
  component: CircularProgressComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["inherit", "primary", "info", "success", "warning", "error"],
    },
    variant: {
      control: "select",
      options: ["determinate", "indeterminate"],
    },
    size: {
      control: {
        type: "range",
        min: 1.5,
        max: 3,
        step: 0.5,
      },
    },
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
  args: {
    color: "inherit",
  },
} satisfies Meta<typeof CircularProgressComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Determinate: Story = {
  args: {
    variant: "determinate",
    size: 2,
  },
};

export const Indeterminate: Story = {
  args: {
    variant: "indeterminate",
    size: 2,
  },
};
