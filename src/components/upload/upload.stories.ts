import type { Meta, StoryObj } from "@storybook/react";

import UploadComponent from "@/components/upload/upload.component";

const meta = {
  title: "Atoms/Upload",
  component: UploadComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UploadComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
