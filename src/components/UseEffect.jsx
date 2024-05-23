import {useState, useEffect} from 'react'


function UseEffect(){

    const [todos, setTodos] = useState([])

   useEffect(()=>{
      fetch("")
      .then(async(res)=>{
          const res2 = await res.json();
          setTodos(res2)
      })
   }, [])

    return(
        <>
        </>
    )
}


export default UseEffect 






















//Lets understand why we need useEffect.
//There are many operations such as fetching data from the backend for example which is classified as a side effect. 
//WHhat are side effects: For now just understand that sideeffects are operations that are not directly associated with renderring of the react components. There are operations must be conditionally performed.

//If we write the fetch code outside useEffect, then the problem we will face is that fetching operation will be performed again and again, everytime the component is rerenderred. We dont want that.

//useEffect(()=>{}, [this is where we define the condition for when fetching operation shud be performed])
//if we leave it blank [], then fetching operation will perform only once when the component renders for the first time 