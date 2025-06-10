import type { Meta, StoryObj } from "@storybook/react";

import UploadComponent from "@/components/upload/upload.component";

const meta = {
  title: "Atoms/Upload",
  component: UploadComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof UploadComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
