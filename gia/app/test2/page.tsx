import { CustomButton, LettersPanel } from '@/components';
import { title } from 'process';
import React from 'react'


export default function Test2() {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  
  //min= 0 for A max= 25 for Z
  const generateRandomNumber = (min:number , max:number) => {
    const numbers = []
    for(let i=0;i<6;i++){
      const num = Math.floor(Math.random()*(max - min + 1)) +min;
      let j=0;
      while(j<6){
        if(numbers[j] != num){
          j++
        }
      }
      if(j === 6){
        numbers.push(num)
      }
    }
    console.log(numbers)
    return numbers
  }

  const pointers = generateRandomNumber(0,25)

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>Perceptual Speed</h1>
            <p className='hero__subtitle'>
              The objective for this test is to identify how fast and accurate you are in checking things in your head.
            </p>
        </div>
        <div className='home__cars-wrapper'>
          {pointers?.map((pointer) => (<LettersPanel pointer={pointer} />))}
        </div>
    </div>
  )
}