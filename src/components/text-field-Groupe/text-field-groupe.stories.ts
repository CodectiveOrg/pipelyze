import type { Meta, StoryObj } from "@storybook/react";

import ComponentName from "./ComponentName.component";

const meta: Meta<typeof ComponentName> = {
  title: "Components/ComponentName",
  component: ComponentName,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    label: { control: "text" },
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Username",
    value: "",
    disabled: false,
    error: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: true,
    helperText: "This field is required",
  },
};
