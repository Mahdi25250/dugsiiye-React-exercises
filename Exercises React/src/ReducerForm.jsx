export const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export const ReducerForm = (state, action) => {
  switch (action.type) {
    case "updateField":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "nextStep":
      return {
        ...state,
        step: state.step + 1,
      };
    case "prevStep":
      return {
        ...state,
        step: state.step - 1,
      };
    case "restForm":
      return initialState;
    default:
      return state;
  }
};
