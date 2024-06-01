import {useEffect, useMemo, useState} from 'react'

function SumOfInput(){

    const [inputval, setInputval] = useState(0)
    const [sum, setSum] = useState(0)
    
        /* useEffect(()=>{
            let cnt = 0
            for(let i=1 ; i<=inputval ; i++){
            cnt = cnt + i;
            }

            setSum(cnt)
        },[inputval])  */
        // above approach causes 2 rerenders, hence we use "useMemo" which is quite similar

        let cntsum = useMemo(()=>{
            let cnt = 0
            for(let i=1 ; i<=inputval ; i++){
                cnt = cnt + i;
                }
            return cnt
        }, [inputval])

        //as we can see, above approach is replacement for useEffect. 
        //it eliminates the need to use "sum" & "setSum" state
        //Whats common in both: the logic inside only runs when "inputval" changes
        //thats the dependency array which specifies under what condition must logic inside run
    
    

    return(
        <>
            <input type="text" onChange={(e)=>{
                setInputval(e.target.value)
            }} />
  
            <h2>The sum from 1 to {inputval} is {cntsum}</h2>

            {/* <button >Take Sum</button> */}

        </>
    )
}

export default SumOfInput