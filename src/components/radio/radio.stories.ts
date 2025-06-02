import type { Meta, StoryObj } from "@storybook/react";

import RadioComponent from "./radio.component";

const meta = {
  title: "Atoms/radio",
  component: RadioComponent,
  args: {
    color: "primary",
    size: "normal",
    label: "Radio label",
  },
} satisfies Meta<typeof RadioComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {},
};

export const Disabled: Story = {
  name: "Deactive",
  args: {
    disabled: true,
  },
};
