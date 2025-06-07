import type { Meta, StoryObj } from "@storybook/react";

import TextFieldGroupeComponent from "./text-field-groupe.component";

const meta: Meta<typeof TextFieldGroupeComponent> = {
  title: "Atoms/TextFieldGroupe",
  component: TextFieldGroupeComponent,
  parameters: {
    layout: "centered",
    controls: { disabled: true },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      table: { disable: true },
    },
    row: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "textField column",
    row: false,
    items: [
      { label: "username", size: "normal" },
      { label: "password", size: "normal" },
    ],
  },
};

export const Row: Story = {
  args: {
    name: "textField row",
    row: true,
    items: [
      { label: "username", size: "normal" },
      { label: "password", size: "normal" },
    ],
  },
};
