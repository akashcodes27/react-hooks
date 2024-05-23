import {useState, useEffect} from 'react'
import Assignment from './Assignment';


function AssignmentParent(){

    const [inputVal, setinputVal] = useState('')

    useEffect(()=>{

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