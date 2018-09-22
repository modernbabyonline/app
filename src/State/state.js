import { create } from 'reworm';
import produce from 'immer';


export const userState = create({
  identification: "Agency",
  role: "Agency",
  userData: "",
  agentName: "",
  clientName: "",
  clientPhone: "",
  clientEmail: "",
  clientDoB: "",
  babyDoB: "",
  socioL19: "false",
  socioUnemployed:"false",
  socioNewToCanada: "false",
  socioSpecial: "false",
  socioHomeless: "false",
  socioOther: ""
});

export const setAgentName = item =>
  userState.set(
    produce(state => {
      state.agentName = item
    })
  )


// export const addTodo = item =>
//   todos.set(
//     produce(state => {
//       state.list.push(item)
//     })
//   )
//
// export const completeTodo = todo => {
//   todos.set(
//     produce(state => {
//       const item = state.list.find(item => item.id === todo.id)
//       item.completed = true
//     })
//   )
// }
//
// export const toggleCompleted = () => {
//   todos.set(
//     produce(state => {
//       state.showCompleted = !state.showCompleted
//     })
//   )
// }
