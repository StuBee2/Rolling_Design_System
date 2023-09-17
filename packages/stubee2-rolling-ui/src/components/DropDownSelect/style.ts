import styled from "styled-components";

export const DropDownSelectContainer = styled.div<{
  width: string;
}>`
  width: ${({ width }) => width};
  height: auto;
  position: relative;
  font-size: 15px;
`;

export const DropDownSelectWrapper = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  background-color: #fff;
  border-radius: 6px;
  outline: none;
  border: 1px solid rgba(189, 194, 208, 1);
  color: #000;
  p {
    padding-left: 20px;
    white-space: nowrap;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const DropDownSelectIcon = styled.div<{ isReverse: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  transform: ${({ isReverse }) => !isReverse && "rotate(180deg)"};
  margin-right: 15px;
`;

export const DropDownSelectItemContainer = styled.div<{ height: string }>`
  width: 100%;
  height: auto;
  position: absolute;
  top: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 7px;
  z-index: 3;

  div {
    width: 100%;
    height: ${({ height }) => height};
    background-color: #fff;
    border-radius: 6px;
    outline: none;
    border: 1px solid rgba(189, 194, 208, 1);
    color: #000;
    cursor: pointer;
    display: flex;
    align-items: center;
    p {
      padding-left: 20px;
    }
  }
`;
