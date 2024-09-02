import React from 'react'
import { ButtonContainer } from './styles'

interface IButton {
  label: String,
  OnClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button( {label, OnClick }: IButton) {
  return (
    <ButtonContainer onClick={OnClick} >
      {label}
    </ButtonContainer>
  )
}
