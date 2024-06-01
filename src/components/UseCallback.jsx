import {useState, useCallback, useEffect} from 'react'
import UseCallback1 from './UseCallback1'

function UseCallback(){

    const [num, setNum] = useState(0)
    const [dark, setDark] = useState(false)

    // function numList(){
    //     return [num, num+1, num+2]
    //     //function returns an array 
    // }

    const numList = useCallback(()=>{
        return [num, num+1, num+2]
    },[num])
    
    //this ensures that numList dosent get redefined again & again when some other state changes. numList now will only get redefined when value of num changes 
   
    

    return(
        <>
            <input type="number" onChange={(e)=>{
                setNum(parseInt(e.target.value))
            }}/>

            {/* <h2>{num}</h2> */}
            {/* {numList().map(ele => <h2>{ele}</h2>)} */}

            <button onClick={()=>{
                setDark(!dark)
                
            }}>Toggle</button>

            {/* <UseCallback1 numList={numList}/> */}
            <Test numListProp={numList}/>
            



        </>


        /* 
        Now if we take a close look, this functional component has 2 states: num and dark. 
        everytime, "num" state changes, the functional component rerenders, this also rerenders the UseCallback1 component that we call at last. This is okay

        But, when we change the state variable "dark", which is not associated to other state. This also causes functional component to render, & this also causes UseCallback1 to rerender which also causes "numList" function to get redefined, which then rerenders.


        A good analogy would be: A abuses B, but C gets triggered, when only B should get triggered.

        To prevent "numList from being rerendered when no changes are made to num.... we must use useCallback hook"


        
        */
    )
}


export default UseCallback 

export function Test({numListProp}){

    const [arr1, setArr1] = useState([])

    useEffect(()=>{
        setArr1(numListProp)
        console.log("Re-render")
    },[numListProp])

    return(
        <>
            {arr1.map(item => <h2>{item}</h2>)}
        </>
    )
}


/*
useCallback is a hook that is use to "memoize" functions.
Eg. Lets say we have a functional component, in which we have defined a state using useState. Everytime the state changes, the functional component rerenders. 

Lets say we have some functional logic or some function defined inside this functional component. Everytime the state changes , the functional component rerenders, AND SO DOES THE function which is defined inside rerenders. This causes react to think that value of the function has changed. This can be detrimental in terms of performance if passing this function in some other component even when its value hasnt even changed.

Hence we use "useCallback" which memoizes functions. If we instead define that function inside the useCallback hook, then everytime the component rerenders, the function will not rerender. 
"Memoize" basically is the concept of memoization which we have learnt in DSA.
It basically means to compute once & memorize solution and use it wherever needed without having to recompute the value again and again 

*/