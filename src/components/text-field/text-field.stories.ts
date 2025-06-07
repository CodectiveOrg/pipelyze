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
    type: "text",
    label: "username",
    placeholder: "enter username",
    userIcon: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    label: "password",
    defaultValue: "1234634257",
    passwordIcon: true,
    showPassword: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "email",
    type: "email",
    required: true,
  },
};

export const HelperText: Story = {
  args: {
    label: "Helper Text",
    defaultValue: "click me",
    helper: true,
    helperText: "Helper Text",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    // disabled:true,
    type: "text",
    defaultValue: "Disable",
  },
};
