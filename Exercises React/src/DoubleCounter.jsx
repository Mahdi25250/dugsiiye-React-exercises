import { useReducer } from "react";

const DoubleCounter = () => {
  const initialState = { countA: 0 , countB: 0  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment_A":
        return {...state, countA: state.countA + 1 };
      case "decrement_A":
        return {...state,  countA: state.countA > 0 ? state.countA - 1 : 0};
      case 'increment_B':
        return{
           ...state,  countB: state.countB + 1
        }  
      case 'decrement_B':
        return{
           ...state, countB: state.countB  > 0 ? state.countB - 1 :0
        }  
      case "allReset":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Double Counter</h1>

      <div>
        {/* Counter A */}
        <h3>Counter A: {state.countA}</h3>
         <button onClick={() =>dispatch({type: 'increment_A'})} >+ A increment</button>
        <button onClick={() =>dispatch({type: 'decrement_A' })} disabled={state.countA === 0}>- A decrement</button>
       
        
      </div> <br />

      <div>
        {/* Counter B*/}
        <h3>Counter B: {state.countB}</h3>
        <button onClick={() =>dispatch({type: 'increment_B'})} >+ B increment</button>

        <button onClick={() =>dispatch({type: 'decrement_B'})} disabled={state.countB === 0}>- B decrement</button>
        
      </div> <br />

      <div>
        {/* Counter reset*/}
        <button onClick={() => dispatch({type: 'allReset'})}>Reset Both</button>
        
        
      </div>

      
    </div>
  );
};

export default DoubleCounter;
