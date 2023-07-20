"use client"
import React,{useState, useEffect} from 'react'
import Test2Panel from './Test2Panel'

interface LettersPanelProps{
  numbers:number[]
  pointer:number
}

const LettersPanel = ({numbers, pointer}:LettersPanelProps) => {
  const [randomNum, setRandomNums] = useState<number[]>([])
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const alphabetLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const position = [0,1,2,3,4]

  useEffect(() => {
    const generateTables = () => {
      const rand = [];
      for (let i = 0; i < 5; i++) {
        if (pointer === i) {
          rand.push(numbers[5]);
        } else {
          rand.push(numbers[i]);
        }
      }
      console.log("random", rand);
      return rand;
    };

    setRandomNums(generateTables());
  }, []);

  return (
    <>
      <div className='home__cars-wrapper max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <h1 className='header__table'>{alphabet[numbers[0]]}</h1>
        <h1 className='header__table'>{alphabet[numbers[1]]}</h1>
        <h1 className='header__table'>{alphabet[numbers[2]]}</h1>
        <h1 className='header__table'>{alphabet[numbers[3]]}</h1>
        <h1 className='header__table'>{alphabet[numbers[4]]}</h1>
        <p>{alphabetLowercase[randomNum[0]]}</p>
        <p>{alphabetLowercase[randomNum[1]]}</p>
        <p>{alphabetLowercase[randomNum[2]]}</p>
        <p>{alphabetLowercase[randomNum[3]]}</p>
        <p>{alphabetLowercase[randomNum[4]]}</p>
        {position?.map((position) => (<Test2Panel position={position} capital={alphabet} lower={alphabetLowercase} randNum={randomNum} numbers={numbers}/>))}
      </div>
    </>
  )
}

export default LettersPanel