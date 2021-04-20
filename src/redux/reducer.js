const initialState = {
  notes: []
};
export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    default:
      return state;
  }
};
