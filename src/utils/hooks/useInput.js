// import {useReducer, useState} from 'react'

// const reducer = (state,action) => {
//   if(action.type === "POST"){
//     return {
//       ...state,  
//     }
//   }
// }

// const useInput = (validateState) => {
// //   const [entredValue, setEntredValue] = useState('')
// //   const [isTouched,setIsTouched] = useState(false)
// const [state,dispatch] = useReducer(reducer, {
//   value:"",
//   isTouched:false,
// })


//   const valueIsValid = validateState(entredValue)
//   const hasError = !valueIsValid && state.isTouched

//   const valueChangeHandler = (event) => {
//     //   setEntredValue(event.target.value)
//     dispatch({type:"POST",entredValue:event.target.value})
//   }
  
//   const inputBlurHandler = (event) => {
//       setIsTouched(true) 
//   } 
//   return {
//       value:entredValue,
//       isValid:valueIsValid,
//       hasError,
//       valueChangeHandler,
//       inputBlurHandler,
//   }
// };
// export default useInput
  


import {useReducer} from 'react'

const reducer = (state,action) => {
  if(action.type === "POST"){
    return {
      ...state,  
      value:action.entredValue,
    }
  }
  if(action.type === 'NO'){
    return {
      ...state,
      isTouched:true,
    }
  }
}

const useInput = (validateState) => {
const [state,dispatch] = useReducer(reducer, {
  value:"",
  isTouched:false,
})


  const valueIsValid = validateState(state.value)
  const hasError = !valueIsValid && state.isTouched

  const valueChangeHandler = (event) => {
    dispatch({type:"POST",entredValue:event.target.value})
  }
  
  const inputBlurHandler = (event) => {
      dispatch({type:'NO',isTouched:false})
  } 
  return {
      value:state.value,
      isValid:valueIsValid,
      hasError,
      valueChangeHandler,
      inputBlurHandler,
  }
};
export default useInput