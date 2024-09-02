import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { useState } from "react";
import { Container, Content, Row } from "styles";

function App() {
  const [currentNumber, setcurrentNumber] = useState("0")

  function handleClickNumber(num: string) {
    setcurrentNumber(prev => `${prev === "0" ? "" : prev}${num}`)
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label='7' OnClick={() => handleClickNumber('7')} />
          <Button label='8' OnClick={() => handleClickNumber('8')} />
          <Button label='9' OnClick={() => handleClickNumber('9')} />
          <Button label='+' OnClick={() => 1} />
        </Row>

        <Row>
          <Button label='4' OnClick={() => handleClickNumber('4')} />
          <Button label='5' OnClick={() => handleClickNumber('5')} />
          <Button label='6' OnClick={() => handleClickNumber('6')} />
          <Button label='-' OnClick={() => 1} />
        </Row>

        <Row>
          <Button label='1' OnClick={() => handleClickNumber('1')} />
          <Button label='2' OnClick={() => handleClickNumber('2')} />
          <Button label='3' OnClick={() => handleClickNumber('3')} />
          <Button label='x' OnClick={() => 1} />
        </Row>
        <Row>
          <Button label='.' OnClick={() => 1} />
          <Button label='0' OnClick={() => handleClickNumber('0')} />
          <Button label='=' OnClick={() => 1} />
          <Button label='/' OnClick={() => 1} />
        </Row>


      </Content>
    </Container>
  );
}

export default App;
