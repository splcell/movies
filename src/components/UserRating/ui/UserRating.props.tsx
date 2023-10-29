import { DetailedHTMLProps, HTMLAttributes} from "react";

export interface UserRatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void
  id: string;
}