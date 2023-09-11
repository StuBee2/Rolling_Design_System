import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Ui/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const IdInput: Story = {
  args: {
    type: "text",
    placeholder: "아이디를 입력해주세요",
    name: "id",
    value: "",
    isError: false,
    errorMessage: "아이디가 잘못되었습니다",
    customStyle: {
      width: "500px",
      height: "56px",
      borderRadius: "6px",
      outline: "none",
      border: "1px solid rgba(189, 194, 208, 1)",
      backgroundColor: "#fff",
      paddingLeft: "20px",
      fontSize: "18px",
    },
  },
};

export const PwInput: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
    name: "id",
    value: "",
    isError: true,
    errorMessage: "비밀번호가 잘못되었습니다",
    customStyle: {
      width: "500px",
      height: "56px",
      borderRadius: "6px",
      outline: "none",
      border: "1px solid rgba(189, 194, 208, 1)",
      backgroundColor: "#fff",
      paddingLeft: "20px",
      fontSize: "18px",
    },
  },
};