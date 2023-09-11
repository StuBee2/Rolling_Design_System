import { Meta, StoryObj } from "@storybook/react";
import StarRating from "./StarRating";

const meta: Meta<typeof StarRating> = {
  title: "Ui/StarRating",
  component: StarRating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const MaxStarRating: Story = {
  args: {
    starRatingCount: 5,
    size: 20,
  },
};

export const FourStarRating: Story = {
  args: {
    starRatingCount: 4,
    size: 20,
  },
};

export const ThreeStarRating: Story = {
  args: {
    starRatingCount: 3,
    size: 20,
  },
};

export const TwoStarRating: Story = {
  args: {
    starRatingCount: 2,
    size: 20,
  },
};

export const OneStarRating: Story = {
  args: {
    starRatingCount: 1,
    size: 20,
  },
};

export const MinStarRating: Story = {
  args: {
    starRatingCount: 0,
    size: 20,
  },
};
