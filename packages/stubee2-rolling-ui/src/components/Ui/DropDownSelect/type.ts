import { Dispatch, SetStateAction } from "react";
import { CSSObject } from "styled-components";

export interface DrowDownSelectProps {
  width: string;
  height: string;

  dropDownSelectItems: string[];

  dropDownSelectItemBoxMaxHeight?: string;
  dropDownSelectItemHeight?: string;

  selectItem: string;
  setSelectItem: Dispatch<SetStateAction<string>>;

  isReverse: boolean;
  setIsReverse: Dispatch<SetStateAction<boolean>>;

  dropDownSelectCustomStyle?: CSSObject;
  dropDownSelectItemBoxCustomStyle?: CSSObject;
}
