import React from 'react'
import { CustomButtonProps } from '@/types'

const CustomButton = ({title,btnStyle,containerStyles, handleClick,textStyle}:CustomButtonProps) => {
  return (
    <button
        type={btnStyle||"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyle}`}>{title}</span>
    </button>
  )
}

export default CustomButton