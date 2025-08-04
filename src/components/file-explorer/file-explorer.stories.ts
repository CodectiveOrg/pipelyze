import type { Meta, StoryObj } from "@storybook/react";

import FileExplorerComponent from "@/components/file-explorer/file-explorer.component";

const meta = {
  title: "Organisms/FileExplorer",
  component: FileExplorerComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof FileExplorerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
