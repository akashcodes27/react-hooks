import {useState, useEffect} from 'react'



function FetchingTodos(){

    const [todos, setTodos] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            //this setTimeout is used to create an artificial delay in fetching, meaning the fetching will take place after 3 seconds 
        },3000)
        fetch(`https://sum-server.100xdevs.com/todos`)
        .then((res1)=>{
            res1.json()
            .then((res2)=>{
                // console.log(res2.todos)
                setTodos(res2.todos)
                console.log(todos)
            })
        })
    },[])

    return(
        <>
        {todos.map(element => <FetchingTodos2 title={element.title} description={element.description}/>)}
            
            
            
        </>
    )
}

export default FetchingTodos


function FetchingTodos2({title, description}){

    return(
        <>
            <h2>The title is {title} & description is {description}</h2>
        </>
    )
}

//This assignment is for fetching ALL TODOS