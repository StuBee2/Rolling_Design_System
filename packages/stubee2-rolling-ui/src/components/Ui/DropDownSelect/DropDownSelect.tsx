import React from "react";
import * as S from "./style";
import { DrowDownSelectProps } from "./type";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

export const DropDownSelect = ({ ...attr }: DrowDownSelectProps) => {
  return (
    <S.DropDownSelectContainer width={attr.width}>
      <S.DropDownSelectWrapper
        height={attr.height}
        dropDownSelectCustomStyle={attr.dropDownSelectCustomStyle}
        onClick={() => attr.setIsShowingItemList((prev) => !prev)}
      >
        <p>{attr.selectItem}</p>
        <S.DropDownSelectIcon isShowingItemList={attr.isShowingItemList}>
          <IoIosArrowDown size={20} />
        </S.DropDownSelectIcon>
      </S.DropDownSelectWrapper>

      {attr.isShowingItemList && (
        <S.DropDownSelectItemContainer
          height={attr.height}
          dropDownSelectItemBoxMaxHeight={attr.itemListMaxHeight}
          dropDownSelectItemBoxCustomStyle={attr.itemListCustomStyle}
        >
          <S.DropDownSelectItemWrapper>
            {attr.itemList.map((item, idx) => (
              <S.DropDownSelectItem
                key={idx}
                height={attr.height}
                dropDownSelectItemHeight={attr.itemHeight}
                onClick={() => {
                  attr.setIsShowingItemList((prev) => !prev);
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
