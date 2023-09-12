import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Ui/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const IdTextInput: Story = {
  args: {
    type: "text",
    placeholder: "아이디를 입력해주세요",
    name: "id",
    value: "",
    isError: false,
    errorMessage: "아이디가 잘못되었습니다",
    textType: "input",
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

export const PwTextInput: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
    name: "id",
    value: "",
    isError: true,
    textType: "input",
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

export const ReviewTextArea: Story = {
  args: {
    name: "review",
    placeholder: "리뷰 내용을 작성해주세요",
    isError: true,
    value: "",
    textType: "textarea",
    errorMessage: "리뷰 내용을 입력해주세요",
    customStyle: {
      width: "652px",
      height: "150px",
      borderRadius: "10px",
      fontSize: "18px",
      padding: "20px 20px",
      outline: "none",
      resize: "none",
      border: "1px solid rgba(189, 194, 208, 1)",
      "::placeholder": {
        color: "rgba(189, 194, 208, 1)",
      },
    },
  },
};
