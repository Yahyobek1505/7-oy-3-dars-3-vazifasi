const defaultState = {
  todos: [],
};

export function todoReducer(state = defaultState, action) {
  let copied = JSON.parse(JSON.stringify(state.todos));
  if (action.type == "ADD_TODO") {
    copied.push(action.payload);
    return { ...state, todos: copied };
  } else if (action.type == "DELETE_TODO") {
    copied = copied.filter((el) => {
      return el.id != action.payload;
    });
    return { ...state, todos: copied };
  } else if (action.type == "CHECK_STATUS") {
    copied = copied.map(el => {
      if (el.id == action.payload.id) {
        el.status = action.payload.status;
      }
      return el;
    });
    return {...state, todos: copied}
  }else{
    return state;
  }
}
