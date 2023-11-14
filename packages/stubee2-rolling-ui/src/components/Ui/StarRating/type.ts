export interface StarRatingProps {
  starRatingCount: number;
  width: number;
  height: number;
  onClick?: () => void;
}

export interface StarRatingItemProps {
  color: string;
  width: number;
  height: number;
  cursor?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
