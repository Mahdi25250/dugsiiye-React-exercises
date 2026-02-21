import { useReducer } from "react";
import { ReducerForm , initialState} from "./ReducerForm";


function FormReducer () {
  const [state, dispatch] = useReducer(ReducerForm, initialState);

  const handleChange = (event) => {
    dispatch({
      type: "updateField",
      field: event.target.name,
      value: event.target.value,
    });
  };

  // nextStep
  const nextStep = () => dispatch({ type: "nextStep" });
  const prevStep = () => dispatch({ type: "prevStep" });
  const resetForm = () => dispatch({type:'restForm'})



    //handleSubmit
    const handleSubmit =() =>{
        alert('Form submitted successfully')
        resetForm()
        
    }


  return (
    <>
      <h1>Multi Step Registration</h1>
      {state.step === 1 && (
        <div>
          <h3>Step 1: Profile</h3>
          <label htmlFor="">
            first Name :
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            last Name:
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
            />
          </label>
          <br />

          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <h3>Step 2 : Contact</h3>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={state.phone}
              onChange={handleChange}
            />
          </label>
          <br />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h3>Step 3 : Review</h3>
          <p>
            <strong>First Name :</strong> {state.firstName}
          </p>
          <p>
            <strong>Last Name :</strong> {state.lastName}
          </p>

          <p>
            <strong>Email:</strong> {state.email}
          </p>

          <p>
            <strong>Phone:</strong> {state.phone}
          </p>

           <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Confirm</button>
        </div>
      )}

      {state.step > 3 &&(
        <div>
            <h3>Form Completed</h3>
            <button onClick={resetForm}>Start Over</button>
        </div>
      )}
    </>
  );
}

export default FormReducer;