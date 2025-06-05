import type { Meta, StoryObj } from "@storybook/react";

import TextFieldComponent from "./text-field.component";

const meta = {
  title: "Atoms/TextField",
  component: TextFieldComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TextFieldComponent>;

export default meta;

type Story = StoryObj<typeof TextFieldComponent>;

export const Default: Story = {
  args: {
    label: "username",
    value: "zdfbfdg",
  },
};

export const InvalidEmail: Story = {
  args: {
    label: "email",
    type: "email",
    placeholder: "yourEmail@email.com",
    required: true,
    // error:'error text'
  },
};
