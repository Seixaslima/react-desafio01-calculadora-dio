import React, { ReactElement } from 'react'
import { ButtonContainer } from './styles'

interface IButton {
  label: String | ReactElement,
  OnClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button( {label, OnClick }: IButton) {
  return (
    <ButtonContainer onClick={OnClick} >
      {label}
    </ButtonContainer>
  )
}
