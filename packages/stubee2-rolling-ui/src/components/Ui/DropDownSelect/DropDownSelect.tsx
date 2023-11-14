import React, { useState } from "react";
import * as S from "./style";
import { DrowDownSelectProps } from "./type";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

export const DropDownSelect = ({ ...attr }: DrowDownSelectProps) => {
  return (
    <S.DropDownSelectContainer width={attr.width}>
      <S.DropDownSelectWrapper
        height={attr.height}
        onClick={() => attr.setIsReverse((prev) => !prev)}
      >
        <p>{attr.selectItem}</p>
        <S.DropDownSelectIcon isReverse={attr.isReverse}>
          <IoIosArrowDown size={20} />
        </S.DropDownSelectIcon>
      </S.DropDownSelectWrapper>

      {attr.isReverse && (
        <S.DropDownSelectItemContainer
          height={attr.height}
          dropDownSelectBoxHeight={attr.dropDownSelectBoxHeight}
        >
          <S.DropDownSelectItemWrapper>
            {attr.dropDownSelectItems.map((item, idx) => (
              <S.DropDownSelectItem
                key={idx}
                height={attr.height}
                dropDownSelectItemHeight={attr.dropDownSelectItemHeight}
                onClick={() => {
                  attr.setIsReverse((prev) => !prev);
                  attr.setSelectItem(item);
                }}
              >
                <p>{item}</p>
              </S.DropDownSelectItem>
            ))}
          </S.DropDownSelectItemWrapper>
        </S.DropDownSelectItemContainer>
      )}
    </S.DropDownSelectContainer>
  );
};
