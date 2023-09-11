import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import React from "react";
import { StarRatingProps } from "./type";

export default function StarRating({ starRatingCount }: StarRatingProps) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, idx) => (
        <AiFillStar
          key={idx}
          size={20}
          color={idx < starRatingCount ? "#FAD85F" : "#d9d9d9"}
        />
      ))}
    </>
  );
}
