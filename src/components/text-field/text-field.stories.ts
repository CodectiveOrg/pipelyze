import type { Meta, StoryObj } from "@storybook/react";

import TextFieldComponent from "./text-field.component";

const meta = {
  title: "Atoms/Icon",
  component: TextFieldComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof TextFieldComponent>;

export default meta;

type Story = StoryObj<typeof TextFieldComponent>;

export const Default: Story = {
  args: {
    label: "نام شما",
    placeholder: "مثلاً علی",
  },
};
