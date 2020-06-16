import React, { useEffect } from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

// const initialState = {
//   product: []
// }
// console.log(JSON.parse(localStorage.getItem("product")))

const initialState =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("product")) || { product: [] } : { product: [] };
// console.log(initialState)

function reducer(state, action) {
  switch (action.type) {
    case "ADD_CART": {
      if (state.product.length > 0) {
        let filtered = state.product.filter(function (value, index, arr) {
          return action.payload.id != value.id
        })
        filtered.push(action.payload)
        return { ...state, product: filtered }
      } else {
        return { ...state, product: [...state.product, action.payload] }
      }
    }
    case "REMOVE_CART": {
      let filtered = state.product.filter(function (value, index, arr) {
        return action.payload.id != value.id
      })
      console.log(filtered)
      return { ...state, product: filtered }
    }
    case "CLEAR_CART": {
      return { ...state, product: [] }
    }
    default:
      throw new Error("Bad Action Type")
  }
  console.log("yes i come here.............")
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("product", JSON.stringify(state))
    }
  }, [state])

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
