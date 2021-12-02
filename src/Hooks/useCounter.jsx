import { useState } from 'react'

const useCounter = (initial = 0,max,min) => {

    const [counter,setCounter] = useState(initial)

    const increment = () =>{
        
        if (counter < max){
            setCounter(counter+1)
        }
        
    }
    const decrement = () =>{

        if(counter>min){
            setCounter(counter-1)
        }
        
    }
    return {
        counter,
        increment,
        decrement
    }
}

export default useCounter
