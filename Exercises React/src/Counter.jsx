import { useState } from "react";

function Counter (){
    const [counter , setCounter] = useState(0)


    const increment = () => setCounter( counter +1)

    const decrement = () => {
        if(counter > 0){
            setCounter(counter -1)

        }
    }
  


    return(
        <>
        <h1>Counter : {counter}</h1>
        <button  onClick={decrement} disabled={counter === 0} >Decrement</button>
        <button onClick={increment} >Increment</button>
        </>
    )
}

export default Counter;