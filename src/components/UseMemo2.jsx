import {useState, useMemo, useEffect} from 'react'

function UseMemo2(){

    const [inputVal, setinputVal] = useState(0)
    const [counter, setCounter] = useState(0)

    let finalSum = useMemo(()=>{
        
        let sum=0
        for(let i=1 ; i<=inputVal ; i++){
            sum = sum + i;

        }
        return sum
        //for a given input, this computation runs only once, so if same input is provided multiple times, it wont compute multiple times

    }, [inputVal])

  


    return(
        <>
            <input type="number" onChange={(e)=>{setinputVal(parseInt(e.target.value))}}/>
            <h2>{finalSum}</h2>


            <button onClick={()=>{setCounter(counter+1)}}>Counter</button>
            <h2>{counter}</h2>
        
            
        </>
    )
}

export default UseMemo2