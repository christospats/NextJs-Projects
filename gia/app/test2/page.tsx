import { CustomButton } from '@/components';
import { title } from 'process';
import React from 'react'


export default function Test2() {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  //min= 0 for A max= 26 for Z
  const generateRandomNumber = (min:number , max:number) => {
    const numbers = []
    for(let i = 0; i<6; i++){
      const num = Math.floor(Math.random()*(max - min + 1)) +min;
      let j = 0
      while(j<numbers.length){
        if(num != numbers[j]){
          j++
        }
      }
      if(j == numbers.length -1){
        numbers.push(num)
      }
    }
    return numbers
  }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>Perceptual Speed</h1>
            <p className='hero__subtitle'>
              The objective for this test is to identify how fast and accurate you are in checking things in your head. 
            </p>
        </div>
    </div>
  )
}