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
    placeholder: "",
    userIcon: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "email",
    type: "email",
    defaultValue: "yourEmail@email.com",
    required: true,
  },
};

export const HelperText: Story = {
  args: {
    label: "Helper Text",
    defaultValue: "lksdhf",
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
