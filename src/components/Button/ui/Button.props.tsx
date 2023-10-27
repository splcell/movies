import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'transparent';
  size?: 's' | 'm',
  className?: string
}