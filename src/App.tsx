import { Backspace } from "@mui/icons-material";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { useState } from "react";
import { Container, Content, Row } from "styles";

function App() {
  const [currentNumber, setcurrentNumber] = useState("0")
  const [previusNumber, setPreviusNumber] = useState("0")
  const [operation, setOperation] = useState("")

  function handleClickNumber(num: string) {
    setcurrentNumber(prev => `${prev === "0" ? "" : prev}${num}`)
  }

  function handleClear(op: string) {
    switch (op) {
      case "AC":
        setOperation("")
        setPreviusNumber("")
        setcurrentNumber("")
        break;
      case "C":
        const newNumber = currentNumber.slice(0, -1)
        setcurrentNumber(newNumber.length > 0 ? newNumber : "0")
        break;
      default:
        break;
    }
  }

  function handleSignalChange() {
    if (currentNumber !== "0") {
      if (currentNumber.charAt(0) === "-") {
        setcurrentNumber(currentNumber.slice(0))
      } else {
        setcurrentNumber(val => `-${val}`)
      }
    }
  }

  function handleEqual() {
    if (operation !== "") {
      handleOperationClick(operation)
      setOperation("")
      setPreviusNumber("")
    }
  }



  function handleOperationClick(op: string) {
    if (operation === "") {
      setOperation(op)
      setPreviusNumber(currentNumber)
      setcurrentNumber("0")
    } else if (currentNumber === "0") {
      setOperation(op)
    } else {
      const previusNumberConvert = Number(previusNumber)
      const currentNumberConvert = Number(currentNumber)
      let result = 0
      switch (op) {
        case "+":
          result = previusNumberConvert + currentNumberConvert
          break;
        case "-":
          result = previusNumberConvert - currentNumberConvert
          break;
        case "*":
          result = previusNumberConvert * currentNumberConvert
          break;
        case "/":
          result = previusNumberConvert / currentNumberConvert
          break;
        case "%":
          result = (previusNumberConvert / 100) * currentNumberConvert
          break;
        default:
          break;
      }
      setcurrentNumber(`${result}`)
    }
  }



  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label='AC' OnClick={() => handleClear('AC')} />
          <Button label={<Backspace />} OnClick={() => handleClear('C')} />
          <Button label='%' OnClick={() => handleOperationClick('%')} />
          <Button label='+/-' OnClick={() => handleSignalChange()} />
        </Row>

        <Row>
          <Button label='7' OnClick={() => handleClickNumber('7')} />
          <Button label='8' OnClick={() => handleClickNumber('8')} />
          <Button label='9' OnClick={() => handleClickNumber('9')} />
          <Button label='+' OnClick={() => handleOperationClick("+")} />
        </Row>

        <Row>
          <Button label='4' OnClick={() => handleClickNumber('4')} />
          <Button label='5' OnClick={() => handleClickNumber('5')} />
          <Button label='6' OnClick={() => handleClickNumber('6')} />
          <Button label='-' OnClick={() => handleOperationClick("-")} />
        </Row>

        <Row>
          <Button label='1' OnClick={() => handleClickNumber('1')} />
          <Button label='2' OnClick={() => handleClickNumber('2')} />
          <Button label='3' OnClick={() => handleClickNumber('3')} />
          <Button label='x' OnClick={() => handleOperationClick("*")} />
        </Row>
        <Row>
          <Button label='.' OnClick={() => handleClickNumber('.')} />
          <Button label='0' OnClick={() => handleClickNumber('0')} />
          <Button label='=' OnClick={() => handleEqual()} />
          <Button label='/' OnClick={() => handleOperationClick("/")} />
        </Row>


      </Content>
    </Container>
  );
}

export default App;
