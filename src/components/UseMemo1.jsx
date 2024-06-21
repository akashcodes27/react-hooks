import {useState, useMemo} from 'react'

//Sum of inputs without using useMemo


function UseMemo1(){

    const [count, setCount] = useState(0)
    const [inputval, setInputval] = useState(0)

    let sum=0
    for(let i=1 ; i<=inputval ; i++){
        sum = sum+i
    }

   



    return(
        <>

            <input type="number" onChange={e => setInputval(e.target.value)}/>
            <h2>Sum is {sum}</h2>

            <button onClick={()=>{setCount(count+1)}}>Update Count</button>
            <h2>Count is {count}</h2>
        </>

    )
}

export default UseMemo1



//we must understand that:
//Whenever state changes, it causes component to re-render, which means logic inside the component also re-renders. 