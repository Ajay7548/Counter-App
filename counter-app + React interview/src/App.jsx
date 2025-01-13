
import './App.css'
import { useState } from 'react'

function App() {
 
  // Using react
  const [counter , setCounter] = useState(0)

  // let prevCounter

  //Through javscript
  // let counter = 1
  // const addValue = () =>{
  //   counter = counter + 1 
  //   const add = document.querySelector('.add')
  //   add.innerHTML = `Increase Value:- ${counter}`
  // }

  // const addValue = ()=>{
  //   if (counter < 10) {
  //     setCounter(counter+1)
  //   }
  //   else{
  //     alert('Counter Reached Limit')

  //   }  
  // }

  //React interview Question
  const addValue = ()=>{
    setCounter(counter+1)//nothing wllbe changed only 1 will be plus
    setCounter(counter+1)//nothing wllbe changed only 1 will be plus
    setCounter(counter+1)//nothing wllbe changed only 1 will be plus
    //if we want above 2-3 plus we need to do this
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter =>  prevCounter + 1)

  }

  const decreaseVal = () => {
    if(counter > 0){
      setCounter(counter -1 )
    }
    else{
      alert('Counter Cannot be below Zero')
    }
    
  }

  return (
    <>
    <h1>Counter App :- {counter}</h1>
    {/* addval passd as refeence so it will execute when click */}
    <button className='add'
    onClick={addValue}>Increase Value:- {counter}</button>
    <br />
    <br />
    <button
    onClick={decreaseVal}
    >Decrease Value:- {counter} </button>
    </>
  )
}

export default App
