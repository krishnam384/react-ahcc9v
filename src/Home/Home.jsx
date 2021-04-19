import React,{useState, useEffect} from 'react';
import {Button} from 'react-bootstrap'
export const Home = () => {
  const [count, setCount] = useState(1);
  const [buttonDisable,setButtonDisable] = useState(false)
  const handleIncrement = () => {
    setCount(count+1)
  }

   const handledecrement = () => {
     
    setCount(count-1)
  }
  useEffect(() => {
    (count <= 0) ?
      setButtonDisable(true)
    : setButtonDisable(false)
  },[count])
  return(
    <>
    <h1>Home component</h1>
    <p>Count: {count}</p>
    <Button variant="secondary" onClick={handleIncrement}>Increase</Button>
    <Button variant="warning" onClick={handledecrement} disabled={buttonDisable} style={{margin:"20px"}}>Decrease</Button>
    </>
  )
}