import { type } from 'os'
import { useReducer } from 'react'
interface CounterState {
    count: number
}
// interface UpdateAction {
//     type: 'increment' | 'decrement',
//     payload: number
// }
// interface ResetAction  {
//     type: 'reset',
    
// }
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
}
type ResetAction = {
  type: "reset";
}
// interface CounterAction<T> {
//     type: 'increment' | 'decrement' | 'reset',
//     payload?:T
// }
type CounterAction = UpdateAction | ResetAction;
const initialState = { count: 0 }
function reducer(state:CounterState, action:CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default: 
            return state
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}> Increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>decrement 10</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
            
        </>
    )
}