import Input from "./components/input";
import Button from "./components/buttons";
import { Container, Content, Row, Title, Titulo } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [accumulatedResult, setAccumulatedResult] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setAccumulatedResult('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleOperation = (operador) => {
    if(operation && currentNumber !== '0') {
      const newResult = calculate(accumulatedResult, Number(currentNumber), operation);
      setAccumulatedResult(newResult);
      setCurrentNumber('0');
    }else{
      setAccumulatedResult(Number(currentNumber));
      setCurrentNumber('0');
    }
    setOperation(operador);
  }
 
  const calculate = (FirstNumber, secondNumber, operador) => {
    switch (operador) {
      case '+':
        return FirstNumber + secondNumber;
      case '-': 
        return FirstNumber - secondNumber;
      case 'x': 
        return FirstNumber * secondNumber;  
      case '/': 
        return FirstNumber / secondNumber;  
      default:
        return secondNumber;
    }
  } 

  const handleEquals = () => {
    if(operation && currentNumber !== '0'){
      const finalResult = calculate(accumulatedResult, Number(currentNumber), operation)
      setCurrentNumber(String(finalResult));
      setAccumulatedResult(0);
      setOperation('');
    }
  }

  return (
    <Container>
      <Content>
        <Titulo>Calculadora</Titulo>
        <Input value={currentNumber} />
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="x" onClick={() => handleOperation('x')} />
          <Button label="÷" onClick={() => handleOperation('/')} />
          <Button label="C" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
