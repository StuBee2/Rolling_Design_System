import { Dispatch, SetStateAction } from "react";

export interface DrowDownSelectProps {
  dropDownSelectItems: string[];

  width: string;
  height: string;

  dropDownSelectBoxHeight?: string;
  dropDownSelectItemHeight?: string;

  selectItem: string;
  setSelectItem: Dispatch<SetStateAction<string>>;

  isReverse: boolean;
  setIsReverse: Dispatch<SetStateAction<boolean>>;
}
