import { combineReducers } from "redux";
// reduce 将很多的状态， reduce 最终的状态

const INITIAL_STATE = {
  todos: [
    {
      id: 0,
      text: '第一条todo'
    }
  ]
}

function todos () {
  return INITIAL_STATE
}

export default combineReducers({
  todos
})