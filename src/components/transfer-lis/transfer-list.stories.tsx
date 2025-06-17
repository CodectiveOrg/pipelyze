import { Meta, StoryObj } from "@storybook/react";

import { ColorType } from "@/types/color.type";
import { ListItem } from "@/types/list-item..type";

import TransferListComponent from "./transfer-list-component";

// Mock data
const sampleItems1: ListItem[] = [
  { id: " 1", name: "Item A" },
  { id: "2", name: "Item B" },
];

const sampleItems2: ListItem[] = [
  { id: "3", name: "Item C" },
  { id: "4", name: "Item D" },
];

const meta: Meta<typeof TransferListComponent> = {
  title: "Components/TransferList",
  component: TransferListComponent,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ] as ColorType[],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TransferListComponent>;

export const Default: Story = {
  args: {
    items1: sampleItems1,
    items2: sampleItems2,
    color: "primary",
  },
};
