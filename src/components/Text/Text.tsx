import styles from "./Text.module.scss";
import { TextProps } from "./Text.props";
import cn from 'classnames'

export function Text({ role, content, isBold, className }: TextProps) {
  return (
    <>
      {role === "title" && <h2 className={cn(styles.title, className, {[styles.bold]: isBold === true})}>{content}</h2>}
      {role === "text" && <p className={cn(styles.text, className, {[styles.bold]: isBold === true})}>{content}</p>}
    </>
  );
}
