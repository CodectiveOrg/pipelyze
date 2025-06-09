import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "@/components/icon-button/icon-button.component";
import TextFieldComponent from "@/components/text-field/text-field.component";

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
    label: "Username",
    type: "text",
  },
};

export const StartAdornment: Story = {
  args: {
    label: "Salary",
    type: "text",
    placeholder: "How much is your income?",
    startAdornment: "$",
  },
};

export const EndAdornment: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <TextFieldComponent
        label="Passowrd"
        type={showPassword ? "text" : "password"}
        defaultValue="12345678"
        endAdornment={
          <IconButton
            name={showPassword ? "eye-line" : "eye-close-line"}
            onClick={() => setShowPassword((old) => !old)}
          />
        }
      />
    );
  },
};

export const Error: Story = {
  args: {
    error: true,
    label: "Email",
    type: "email",
    startAdornment: "hr",
    endAdornment: "@pipelyze.com",
  },
};

export const HelperText: Story = {
  args: {
    label: "Birthdate",
    type: "date",
    helperText: "Format: yyyy-mm-dd",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    type: "text",
    disabled: true,
    placeholder: "You can't change this",
  },
};

export const SmallSize: Story = {
  args: {
    label: "Small",
    type: "text",
    size: "small",
  },
};

export const NormalSize: Story = {
  args: {
    label: "Normal",
    type: "text",
    size: "normal",
  },
};
