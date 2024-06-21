import {useState, useMemo, useEffect} from 'react'



function UseMemo3(){

    const [exchange1data, setExchange1data] = useState({})
    const [exchange2data, setExchange2data] = useState({})
    const [bankData, setBankData] = useState({})

    useEffect(()=>{
        setTimeout(()=>{
            setExchange1data({earnings: 1000})
        },2000)

    },[])

    useEffect(()=>{
        setTimeout(()=>{
            setExchange2data({earnings: 1800})
        },2000)
    },[])

    useEffect(()=>{
        setBankData({earnings: 500})
    },[])

    


    //whatever is inside the useEffect runs only whens during component mounting phase, but the below code computation happens every time component re-renders because it is placed outside useEffect.

    //As long as exchangedata state variabls are changing, we are okay with multiple computations
    //but if an unrelated state changes like bankdata in this case, that also causes re-renderring of exchangedata computation, this is a redundant operations, hence we enclose this specifc operation inside a useMemo hook, it leverages the concept of "Memoization"

    // let finalExchangeEarnings = exchange1data.earnings + exchange2data.earnings
    // console.log(finalExchangeEarnings)

    const finalExchangeEarnings = useMemo(()=>{
        return exchange1data.earnings + exchange2data.earnings
    },[exchange1data, exchange2data])

    //now we are making sure that the exchange related computation only happens when exchangedata sstate variables change & not when bank data is changing 
    //we can also use "useEffect" to accomplish this, but useMemo has been designed exclusively to handle redundancies related with multiple computations 

    let totalEarnings = finalExchangeEarnings + bankData.earnings
    console.log(totalEarnings)

    return(
        <>
        </>
    )
}


export default UseMemo3