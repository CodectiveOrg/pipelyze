import type { Meta, StoryObj } from "@storybook/react";

import DataGridComponent from "@/components/data-grid/data-grid.component";

import { DATA_GRID_MOCK_ROWS } from "@/mock/data-grid.mock";

const meta = {
  title: "Organisms/DataGrid",
  component: DataGridComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof DataGridComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: DATA_GRID_MOCK_ROWS,
  },
};
