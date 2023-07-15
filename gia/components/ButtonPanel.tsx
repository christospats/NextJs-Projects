"use client"
import React from 'react'
import { MouseEvent, useState } from 'react'
import CustomButton from './CustomButton'
import { useRouter } from 'next/navigation'

interface ButtonPanelProps{
    generatedRandomNumber:number[]
}

const ButtonPanel = ({generatedRandomNumber}:ButtonPanelProps) => {
  const [ win, setWin ] = useState(false)
  const [round, setRound] = useState(false)
  const router = useRouter()
    
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    let min = generatedRandomNumber[0]
    let max = generatedRandomNumber[0]
    let remaining = 0
    const buttonText = event.currentTarget.textContent;
    setRound(true)
    if (buttonText !== null) {
        const parsedNumber = parseInt(buttonText, 10);
        console.log('Parsed Number:', parsedNumber);
        for(let i = 1; i<3 ; i++){
            if(generatedRandomNumber[i] == parsedNumber){
                remaining = generatedRandomNumber[i]
            }
        }
        for(let i = 1; i<3 ; i++){
            if(max < generatedRandomNumber[i]){
                max = generatedRandomNumber[i]
            }
            if(min > generatedRandomNumber[i]){
                min = generatedRandomNumber[i]
            }
        }
        for(let i = 0 ; i<3 ; i++){
            if(generatedRandomNumber[i] != max && generatedRandomNumber[i] != min){
                remaining = generatedRandomNumber[i]
            }
        }
        console.log("Max: ", max, " Min: ", min," Remaining: ", remaining)
        const subMax = Math.abs(max - remaining)
        const subMin = Math.abs(min - remaining)
        const subParsed = Math.abs(parsedNumber - remaining)
        console.log(subParsed, subMax, subMin)
        if((subParsed >= subMax)&&(subParsed >= subMin)){
            setWin(true)
        }
    }

  }

  return (
    <>
        <div className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <button
                type='button'
                className='bg-primary-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mix-w-[130px] text-lg'
                onClick={handleClick}
            >
                {generatedRandomNumber[0]}
            </button>
            <button
                type='button'
                className='bg-primary-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mix-w-[130px] text-lg'
                onClick={handleClick}
            >
                {generatedRandomNumber[1]}
            </button>
            <button
                type='button'
                className='bg-primary-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mix-w-[130px] text-lg'
                onClick={handleClick}
            >
                {generatedRandomNumber[2]}
            </button>  
        </div>
        <div className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            {round && <>
                <p className='hero__subtitle'>
                    You {win ? 'Won' : 'Lost'}:    
                </p>
                <CustomButton
                    title='Try again'
                    btnStyle = "button"
                    containerStyles='bg-primary-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mix-w-[130px]'
                    handleClick={() => (window.location.reload())}
                />
            </>}
        </div>
    </>
  )
}

export default ButtonPanel