import type { Meta, StoryObj } from "@storybook/react";

import FileExplorerComponent from "./file-explorer.component";

const meta = {
  title: "Components/FileExplorer",
  component: FileExplorerComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof FileExplorerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
