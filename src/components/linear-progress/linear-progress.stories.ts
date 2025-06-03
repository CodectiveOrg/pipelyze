import type { Meta, StoryObj } from "@storybook/react";

import LinearProgressComponent from "@/components/linear-progress/linear-progress.component";

const meta = {
  title: "Atoms/LinearProgress",
  component: LinearProgressComponent,
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
} satisfies Meta<typeof LinearProgressComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Determinate: Story = {
  args: {
    variant: "determinate",
  },
};

export const Indeterminate: Story = {
  args: {
    variant: "indeterminate",
  },
};
