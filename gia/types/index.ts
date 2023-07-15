import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string
    btnStyle: "button" | "submit"
    containerStyles?:string
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyle?:string
}