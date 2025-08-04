import type { Meta, StoryObj } from "@storybook/react";

import FileExplorerComponent from "@/components/file-explorer/file-explorer.component";

import { FILE_EXPLORE_MOCK_ITEMS } from "@/mock/file-explorer.mock";

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
  args: {
    items: FILE_EXPLORE_MOCK_ITEMS,
  },
};
