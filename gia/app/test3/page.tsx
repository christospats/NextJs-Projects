import { ButtonPanel } from '@/components';
import { useState } from 'react'

export default function Test3() {
  
  const generateRandomNumber = (min:number , max:number) => {
    const numbers = []
    for(let i = 0; i<3; i++){
      const num = Math.floor(Math.random()*(max - min + 1)) +min;
      numbers.push(num)
    }
    return numbers
  }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>Number speed & Accuracy</h1>
            <p className='hero__subtitle'>
              This test measures your speed and accuracy in carrying out number tasks in your head. For each problem
              presented, start by finding the highest and the lowest of the three numbers displayed.
              Having identified those, decide whether the highest number or the lowest number is numerically further away
              from the remaining number. 
            </p>
            <ButtonPanel generatedRandomNumber={generateRandomNumber(1,10)} />
        </div>
    </div>
  )
}
