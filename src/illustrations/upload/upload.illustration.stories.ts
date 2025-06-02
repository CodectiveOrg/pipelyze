import UploadIllustration from "@/illustrations/upload/upload.illustration";
import type { Meta, StoryObj } from "@storybook/react";

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
