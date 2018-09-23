import { create } from 'reworm';
import produce from 'immer';


export const userState = create({
  referrerEmail: "",
  referrerName: "",
  clientName: "",
  clientPhone: "",
  clientEmail: "",
  clientDoB: "",
  babyDoB: "",
  clientInc: "",
  socioL19: "false",
  socioUnemployed:"false",
  socioNewToCanada: "false",
  socioSpecial: "false",
  socioHomeless: "false",
  socioOther: "",
  searchTerm: "",
  searchField: ""

});

export const setClientData = item =>
  userState.set(
    produce(state => {
      state.agentName = item
    })
  )

  export const appointStateData = create({
    type: "",
    DateTime: "",
    Volunteer: "",
    itemsTaken: {
      Crib: "",
      Bassient: "",
      "Pack N Play": "",
      "Single stroller": "",
      "Double stroller": "",
      "Front carrier": "",
      "Bouncy chair": "",
      "Swing": "",
      "Exercauser": "",
      "Jolly jumper": "",
      "High chair": "",
      "Bathtub": "",
      "Diapers": "",
      "Diaper Bag": "",
      Blankets: "",
      "Crib bedding": "",
      Sleepsacks: "",
      Clothing: "",
      "Toys/books": "",
      "Nursing pillow": "",
      "Safety gate": "",
      Bottles: "",
      "Feeding accessories": "",
      Monitor: "",
      "Safety gear": "",
      "Breast pump": "",
    },
  });


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
