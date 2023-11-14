import { Meta, StoryObj } from "@storybook/react";
import { DropDownSelect } from "./DropDownSelect";

const meta: Meta<typeof DropDownSelect> = {
  title: "Ui/DropDownSelect",
  component: DropDownSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropDownSelect>;

export const PositionDropDown: Story = {
  args: {
    width: "500px",
    height: "60px",

    selectItem: "포지션을 선택해주세요",

    dropDownSelectBoxHeight: "240px",
    dropDownSelectItemHeight: "50px",

    isReverse: false,

    dropDownSelectItems: [
      "포지션을 선택해주세요",
      "Frontend 개발자",
      "BackEnd 개발자",
      "DevOps",
      "iOS 개발자",
      "Android 개발자",
    ],
  },
};
