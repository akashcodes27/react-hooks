import axios from 'axios'
import {useState, useEffect} from 'react'

function AssignmentFunc(){

    const [btnVal, setBtnVal] = useState()

   

    return(
        <>
            <h1>Testing if it works</h1>
            <button onClick={()=>{setBtnVal(1)}}>1</button>
            <button onClick={()=>{setBtnVal(2)}}>2</button>
            <button onClick={()=>{setBtnVal(3)}}>3</button>
            <button onClick={()=>{setBtnVal(4)}}>4</button>
            <TodoFunc id={btnVal}/>

        </>
    )
}

export default AssignmentFunc 


export function TodoFunc({id}){

    const [todo, setTodo] = useState([])
    
    useEffect(()=>{
        
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then((res)=>{
            console.log(res.data)
            console.log("hey2")
        })
       
    },[id])

    return(
        <>
            <h2>This is TodoFunc component</h2>
        </>
    )
}

//This assignment is for fetching todo of specific id, not for fetching all todos 
