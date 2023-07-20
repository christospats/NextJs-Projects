"use client"
import React, {MouseEvent,useState} from 'react'
import CustomButton from './CustomButton'

interface Test2PanelProps{
    position:number
    capital:string[]
    lower:string[]
    randNum:number[]
    numbers:number[]
}

const Test2Panel = ({position, capital, lower, randNum, numbers}:Test2PanelProps) => {
  
    const [ win, setWin ] = useState(false)
    const [round, setRound] = useState(false)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonTest = event.currentTarget.textContent
    const parsedButton = parseInt(buttonTest,10)
    if(capital[numbers[parsedButton]].toLowerCase() !== lower[randNum[parsedButton]]){
        console.log("WON")
        setWin(true)
    }else{
        console.log("LOST")
        setWin(false)
    }
    setRound(true)
  }

  return (
    <>
        <div>
            <button 
                type='button' 
                className='bg-primary-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mix-w-[130px] text-lg'
                onClick={handleClick}>
                    {position}
            </button>
            <div>
                {round && <>
                    <p className='hero__subtitle'>
                        You {win ? 'Won' : 'Lost'}:    
                    </p>
                    <CustomButton
                        title='Try again'
                        btnStyle = "button"
                        containerStyles='bg-primary-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mix-w-[130px] text-lg'
                        handleClick={() => (window.location.reload())}
                    />
                </>}
            </div>
        </div>
    </>
  )
}

export default Test2Panel