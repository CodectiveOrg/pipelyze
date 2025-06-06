import type { Meta, StoryObj } from "@storybook/react";

import AvatarComponent from "@/components/avatar/avatar.component";

const meta = {
  title: "Atoms/Avatar",
  component: AvatarComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      mapping: {
        "": undefined,
      },
    },
    src: {
      control: "select",
      options: [
        undefined,
        "Sample 1",
        "Sample 2",
        "Sample 3",
        "Sample 4",
        "Sample 5",
      ],
      mapping: {
        "Sample 1": "/assets/avatars/avatar-1.webp",
        "Sample 2": "/assets/avatars/avatar-2.webp",
        "Sample 3": "/assets/avatars/avatar-3.webp",
        "Sample 4": "/assets/avatars/avatar-4.webp",
        "Sample 5": "/assets/avatars/avatar-5.webp",
      },
    },
    alt: {
      control: "text",
    },
    size: {
      control: {
        type: "range",
        min: 2,
        max: 4,
        step: 0.5,
      },
    },
    variant: {
      control: "select",
      options: ["circular", "rounded", "square"],
    },
  },
  args: {
    name: "John Doe",
    size: 2.5,
  },
} satisfies Meta<typeof AvatarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {
  args: {},
};

export const Image: Story = {
  args: {
    name: undefined,
    src: "Sample 1",
    alt: "Alternative Text",
  },
};
