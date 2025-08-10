import type { Meta, StoryObj } from "@storybook/react";

import DataGridEssentialsComponent from "@/components/data-grid-essentials/data-grid-essentials.component";

import { DATA_GRID_ESSENTIALS_MOCK_ROWS } from "@/mock/data-grid-essentials.mock";

const meta = {
  title: "Organisms/DataGridEssentials",
  component: DataGridEssentialsComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof DataGridEssentialsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: DATA_GRID_ESSENTIALS_MOCK_ROWS,
  },
};
