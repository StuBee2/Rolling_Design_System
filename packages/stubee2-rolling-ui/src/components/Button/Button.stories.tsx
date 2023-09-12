import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "./Button";
import github from "../../assets/github.svg";

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
    children: (
      <>
        <img src={github} alt="이미지 없음" />
        <p>Github 간편 로그인</p>
      </>
    ),
    ButtonType: "github",
  },
};

export const RollingSignInButton: Story = {
  args: {
    children: "Sign In",
    ButtonType: "default",
  },
};

export const ReviewButton: Story = {
  args: {
    children: "리뷰등록",
    ButtonType: "review",
  },
};

export const customButton: Story = {
  args: {
    children: "등록하기",
    ButtonType: "custom",
    customStyle: {
      backgroundColor: "rgba(72, 105, 246, 1)",
      width: "153px",
      height: "52px",
      cursor: "pointer",
      color: "#fff",
      borderRadius: "7px",
      outline: "none",
      border: "none",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
      fontWeight: "600",
      fontSize: "17px",
    },
  },
};
