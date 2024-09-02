import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { Container, Content, Row } from "styles";

function App() {
  return (
    <Container>
      <Content>
        <Input />

        <Row>
          <Button label='1' OnClick={() => 1} />
          <Button label='2' OnClick={() => 1} />
          <Button label='3' OnClick={() => 1} />
          <Button label='+' OnClick={() => 1} />
        </Row>

        <Row>
          <Button label='4' OnClick={() => 1} />
          <Button label='5' OnClick={() => 1} />
          <Button label='6' OnClick={() => 1} />
          <Button label='-' OnClick={() => 1} />
        </Row>

        <Row>
          <Button label='7' OnClick={() => 1} />
          <Button label='8' OnClick={() => 1} />
          <Button label='9' OnClick={() => 1} />
          <Button label='=' OnClick={() => 1} />
        </Row>


      </Content>
    </Container>
  );
}

export default App;
