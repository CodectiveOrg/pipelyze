import type { Meta, StoryObj } from "@storybook/react";

import TextFieldGroupeComponent from "./text-field-groupe.component";

const meta: Meta<typeof TextFieldGroupeComponent> = {
  title: "Atoms/TextFieldGroupe",
  component: TextFieldGroupeComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Username",

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

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithError: Story = {
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
