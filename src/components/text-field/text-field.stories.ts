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
    type: "search",
    placeholder: "Search...",
  },
};

export const StartAdornment: Story = {
  args: {
    type: "text",
    label: "Username",
    placeholder: "please enter your name",
    startAdornment: true,
  },
};

export const EndAdornment: Story = {
  args: {
    type: "Password",
    label: "password",
    defaultValue: "1234634257",
    endAdornment: true,
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    type: "email",
    required: true,
  },
};

export const HelperText: Story = {
  args: {
    label: "Birthdate",
    defaultValue: "enter your birthdate",
    helperText: "Format: YYYY-MM-DD",
  },
};

export const Disabled: Story = {
  args: {
    label: "name",
    disabled: true,
    type: "text",
    defaultValue: "You can't edit it",
  },
};
