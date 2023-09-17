import { Dispatch, SetStateAction } from "react";

export interface DrowDownSelectProps {
  dropDownSelectItems: string[];
  width: string;
  height: string;
  isError?: boolean;
  errorMessage?: string;
  selectItem: string;
  setSelectItem: Dispatch<SetStateAction<string>>;
}
