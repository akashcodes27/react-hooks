import {useState, useEffect} from 'react'


function UseEffect(){

    const [todos, setTodos] = useState([])

   useEffect(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async(res)=>{
          const res2 = await res.json();
          console.log(res2.todos)
        setTodos(res2.todos)
      })
   },[])

    return(
        <>
            {todos.map(todoobjs => <TodoFunc title={todoobjs.title} description={todoobjs.description} />)}
        </>
    )
}

export default UseEffect 

export function TodoFunc({title, description}){
    return(
        <>
            <h2>{true}</h2>
        </>
    )
}




//Lets understand why we need useEffect.
//There are many operations such as fetching data from the backend for example which is classified as a side effect. 
//WHhat are side effects: For now just understand that sideeffects are operations that are not directly associated with renderring of the react components. There are operations must be conditionally performed.

//If we write the fetch code outside useEffect, then the problem we will face is that fetching operation will be performed again and again, everytime the component is rerenderred. We dont want that.

//useEffect(()=>{}, [this is where we define the condition for when fetching operation shud be performed])
//if we leave it blank [], then fetching operation will perform only once when the component renders for the first time 
//[] is known as the dependency array 

//what does [] take as input? It takes as input state variables. And whenever the state variable changes, the code inside useEffect rerenderrs. so it will look like:
// useEffect(()=>{}, [todos])
//Everytime todos variable changes, code inside callback fn of useEffect will re-render

//Remember: We cannot use async-wait for the function defined inside the useEffect