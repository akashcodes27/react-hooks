import UseEffect from "./components/UseEffect";
import Assignment from "./components/Assignment";
// import SumOfInput from "./components/SumOfInput";
import UseCallback from "./components/UseCallback";
import AssignmentFunc from "./components/AssignmentUsingAxios";
import FetchingTodos from "./components/FetchingTodosUseEffect";
import UseMemo1 from "./components/UseMemo1";
import UseMemo2 from "./components/UseMemo2"

function App() {


  return (
    <>
      <h1>Welcome to React</h1>
      {/* <h1>Hey</h1> */}
      {/* <UseEffect/> */}
      {/* <Assignment/> */}
      {/* <SumOfInput/> */}
      {/* <UseCallback/> */}
      {/* <AssignmentFunc/> */}
      {/* <FetchingTodos/> */}
      {/* <UseMemo1/> */}
      <UseMemo2/>



    </>
  );
}

export default App;

//hooks are allow functional components in react to use State, they also allow us to implement lifecycle method features like the ones which were used back in the days of class components.

//Lets understand side effects: lets say we are in a race, we dont take pit stops in every lap, we may only take a few pit stops after every couple of laps when certain condition is attainted. Making a pit stop is just like a side effect. Operations like fetching data from backend are examples of side effects. We dont fetch data from backend everytime we render a component. We only fetch data when a certain condition is met.

//useEffect is the hook very popularly which is used to handle side effects
//lets say we write logic for fetching data inside the useEffect hook.  Everytime we call the function which changes the state, the component re-renders, also causing DOM to render. 

//whenever state updates, it triggers a re-render and hence DOM updates

// Some popular hooks:
//useEffect
//useState
//useMemo
//useCallback
//useRef
//useContext


