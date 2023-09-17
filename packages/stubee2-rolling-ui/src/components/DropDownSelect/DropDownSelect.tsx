import React, { useState } from "react";
import * as S from "./style";
import { DrowDownSelectProps } from "./type";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

export const DropDownSelect = ({
  dropDownSelectItems,
  isError,
  errorMessage,
  width,
  height,
  selectItem,
  setSelectItem,
}: DrowDownSelectProps) => {
  const [isReverse, setIsReverse] = useState(true);
  return (
    <S.DropDownSelectContainer width={width}>
      <S.DropDownSelectWrapper height={height}>
        <p>{selectItem}</p>
        <S.DropDownSelectIcon
          isReverse={isReverse}
          onClick={() => setIsReverse((prev) => !prev)}
        >
          <IoIosArrowDown size={20} />
        </S.DropDownSelectIcon>
      </S.DropDownSelectWrapper>
      {!isReverse && (
        <S.DropDownSelectItemContainer height={height}>
          {dropDownSelectItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                setIsReverse((prev) => !prev);
                setSelectItem(item);
              }}
            >
              <p>{item}</p>
            </div>
          ))}
        </S.DropDownSelectItemContainer>
      )}
    </S.DropDownSelectContainer>
  );
};
