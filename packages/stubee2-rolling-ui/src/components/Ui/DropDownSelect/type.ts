import { Dispatch, SetStateAction } from "react";
import { CSSObject } from "styled-components";

export interface DrowDownSelectProps {
  width: string;
  height: string;

  itemList: string[];

  itemListMaxHeight?: string;
  itemHeight?: string;

  selectItem: string;
  setSelectItem: Dispatch<SetStateAction<string>>;

  isShowingItemList: boolean;
  setIsShowingItemList: Dispatch<SetStateAction<boolean>>;

  dropDownSelectCustomStyle?: CSSObject;
  itemListCustomStyle?: CSSObject;
}
