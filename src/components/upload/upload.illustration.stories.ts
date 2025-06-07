import type { Meta, StoryObj } from "@storybook/react";

import UploadIllustration from "@/components/upload/upload.illustration";

const meta = {
  title: "Atoms/Upload",
  component: UploadIllustration,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UploadIllustration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
