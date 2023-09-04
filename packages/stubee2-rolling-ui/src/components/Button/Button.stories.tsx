import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const GithubSignInButton: Story = {
  args: {
    children: <p>Github 간편 로그인</p>,
    ButtonType: "github",
  },
};

export const RollingSignInButton: Story = {
  args: {
    children: "Sign In",
    ButtonType: "normal",
  },
};

export const ReviewButton: Story = {
  args: {
    children: "리뷰등록",
    ButtonType: "review",
  },
};
