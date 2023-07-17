import React from 'react'

interface LettersPanelProps{
  pointer:number
}

const LettersPanel = ({pointer}:LettersPanelProps) => {
  return (
    <div>{pointer}</div>
  )
}

export default LettersPanel