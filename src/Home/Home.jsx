import React,{useState, useEffect} from 'react';

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
    <button onClick={handleIncrement}>Increase</button>
    <button onClick={handledecrement} disabled={buttonDisable} style={{margin:"20px"}}>Decrease</button>
    </>
  )
}