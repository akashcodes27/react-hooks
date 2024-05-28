import {useState, useEffect} from 'react'
import Assignment from './Assignment';

function AssignmentParent(){

    const [inputVal, setinputVal] = useState('')

    useEffect(()=>{
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async(res1)=>{
            const res2 = await res1.json()
            
        })
    },[inputVal])

    return(
        <>
            
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                // console.log("Form submitted");
                setinputVal(e.target.value)
            }}>
                <input type="text" />
            </form>



        </>
    )
}

export default AssignmentParent 