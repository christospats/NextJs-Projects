import { CustomButton, LettersPanel } from '@/components';
import { title } from 'process';
import React from 'react'


export default function Test2() {  
  //min= 0 for A max= 25 for Z
  const generateRandomNumber = (min:number , max:number) => {
    const numbers = [];
    for (let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
      let j = 0;
      while (j < numbers.length) {
        if (numbers[j] !== num) {
          j++;
        } else {
          num = Math.floor(Math.random() * (max - min + 1)) + min;
          j = 0; // Restart the loop to check the new num against all previous numbers
        }
      }
      numbers.push(num);
    }
    console.log("first", numbers);
    return numbers;
  }

  const generateRandomPointer = (min:number, max:number) => {
    return Math.floor(Math.random()*(max - min + 1)) +min;
  }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>Perceptual Speed</h1>
            <p className='hero__subtitle'>
              The objective for this test is to identify how fast and accurate you are in checking things in your head.
            </p>
            <LettersPanel numbers={generateRandomNumber(0,25)} pointer={generateRandomPointer(0,4)}/>
        </div>
    </div>
  )
}