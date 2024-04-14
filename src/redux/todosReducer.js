const defaultState = {
  todos: [],
};

export function todoReducer(state = defaultState, action) {
  if (action.type == "ADD_TODO") {
    let copied = JSON.parse(JSON.stringify(state.todos));
    copied.push(action.payload);
    return {...state, todos: copied}
  } else if (action.type == "DELETE_TODO") {
    let copied = JSON.parse(JSON.stringify(state.todos));
    copied = copied.filter(el => {
      return el.id != action.payload
    })
    return {...state, todos: copied}
  } else if (action.type == "UPDATE_TODO") {

  } else {
  }
  return state;
}
