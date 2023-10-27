import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export function Button({ children, color, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.primary]: color === "primary",
        [styles.secondary]: color === "secondary",
        [styles.transparent]: color === "transparent",
        [styles.small]: size === "s",
        [styles.middle]: size === "m",
      })}
      {...props}
    >
      {children}
    </button>
  );
}
