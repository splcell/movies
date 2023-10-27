export interface TextProps{
  role: 'title' | 'text'
  content: string;
  isBold?: boolean;
  className?: string
}