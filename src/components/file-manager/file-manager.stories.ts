import type { Meta, StoryObj } from "@storybook/react";

import FileManagerComponent from "./file-manager.component";

const meta = {
  title: "Components/FileManagerComponent",
  component: FileManagerComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof FileManagerComponent>;

export default meta;

type Story = StoryObj<typeof FileManagerComponent>;

export const Default: Story = {
  args: {},
};
