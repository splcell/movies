import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export function Button({ children, color, size, className, disabled=false, ...props }: ButtonProps) {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.primary]: color === "primary",
        [styles.secondary]: color === "secondary",
        [styles.transparent]: color === "transparent",
        [styles.disabled]: color === "disabled",
        [styles.small]: size === "s",
        [styles.middle]: size === "m",
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
