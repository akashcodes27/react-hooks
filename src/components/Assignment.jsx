import {useState, useEffect} from 'react'



function Assignment(){

    const [btnVal, setBtnVal] = useState(0)
    
    


    return(
        <>
        <button onClick={()=>{
            setBtnVal(1)
            
        }}>1</button>
        <button onClick={()=>{
            setBtnVal(2)
        }}>2</button>
        <button onClick={()=>{
            setBtnVal(3)
        }}>3</button>
        <button onClick={()=>{
            setBtnVal(4)
        }}>4</button>

        <TodoFunc id={btnVal}/>


        </>
    )
}

export default Assignment 


function TodoFunc({id}){
    const[todo, setTodo] = useState([])
    useEffect(()=>{
        fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then( async (res)=>{
           const res2 = await res.json()
           setTodo(res2)
            
        })
    },[id])
    // as we can see above, id is our dependency, which means the logic inside useEffect re-renders everytime the id changes 
    return(
        <>
            {/* fetch returns a whole array of todos, hence we can iterate over all these todos */}
            {/* {res2} */}
    

        </>
    )
}

//This assignment is for fetching todo of specific id, not for fetching all todos 