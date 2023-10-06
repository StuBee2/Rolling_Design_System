import { Meta, StoryObj } from "@storybook/react";
import { StarRating } from "./StarRating";

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
    width: 27,
    height: 28,
  },
};

export const FourStarRating: Story = {
  args: {
    starRatingCount: 4,
    width: 27,
    height: 28,
  },
};

export const ThreeStarRating: Story = {
  args: {
    starRatingCount: 3,
    width: 27,
    height: 28,
  },
};

export const TwoStarRating: Story = {
  args: {
    starRatingCount: 2,
    width: 27,
    height: 28,
  },
};

export const OneStarRating: Story = {
  args: {
    starRatingCount: 1,
    width: 27,
    height: 28,
  },
};

export const MinStarRating: Story = {
  args: {
    starRatingCount: 0,
    width: 27,
    height: 28,
  },
};

export const DecimalPointStarRating: Story = {
  args: {
    starRatingCount: 1.5,
    width: 27,
    height: 28,
  },
};
