import { Dispatch, SetStateAction } from "react";

export interface DrowDownSelectProps {
  dropDownSelectItems: string[];
  width: string;
  height: string;
  selectItem: string;
  setSelectItem: Dispatch<SetStateAction<string>>;
}
