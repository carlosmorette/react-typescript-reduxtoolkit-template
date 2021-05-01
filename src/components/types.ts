import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLElement> {}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  content: string;
}

export interface IAvailableComponents {
  Input: (props: IInputProps) => JSX.Element;
  Button: (props: IButtonProps) => JSX.Element;
}
