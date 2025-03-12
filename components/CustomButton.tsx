'use client'
import React from 'react'
import { CustomButtonProps } from '@/types'
import Image from 'next/image'

const CustomButton = ({title,containerStyles,handleClick,btnType,textStyle,isDisabled,righIcon}:CustomButtonProps) => {
  return (
    <button
        disabled={isDisabled || false  }
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyle}` }>
            {title} 
        </span>
        {righIcon && 
          <div className=' relative w-6 h-6'>
            <Image src={righIcon} alt="" height={20} width={20} />
          </div>
        }

        
    </button>
  )
}

export default CustomButton