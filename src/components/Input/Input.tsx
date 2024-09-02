import { InputContainer } from './styles'

export default function Input({ value }: { value: string }) {
  return (
    <InputContainer>
      <input value={value} />
    </InputContainer>
  )
}
