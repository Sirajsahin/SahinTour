
//class component with change state object value
import React,{Component} from 'react'

class App extends Component{
   constructor(){
     super()
     this.state={
       name:"siraj",
       roll:41,
       color:"red"
     }
   }
   changePopertys=()=> {
      this.setState({color:"blue",roll:52})     
   }
  render(){
    return(
      <div>
        <h1>class Component make by {this.state.name} and color {this.state.color} roll is {this.state.roll} </h1>
         <button onClick={this.changePopertys}>Change state poperty value</button>  
     </div>
    )
  }
}
export default App


//parent to child 
import React from 'react'
import Preview from './Preview'
function App(props){
  const data={name:"siraj",roll:22,color:"red"}
  return(
    <>
    <Preview parentTochild={data}/>
    </>
  )
}
export default App



import React from 'react'

function Preview({parentTochild}){
 
  return(
    <div>
     <h1>{parentTochild.name} and roll {parentTochild.roll}</h1>
    </div>
  )

} 
export default Preview


//child to parent







//toggle ture and false
import React, { useState } from 'react'
import Preview from './Preview'
function App(props){
  const data={name:"siraj",roll:22,color:"red"}
  const [set,setSet]=useState(false)
   return(
    <>
    <button onClick={()=>setSet((e)=>!e)}>show</button>
   {
     set?<h2>siraj here </h2>:null
   }
   
    <Preview parentTochild={data}/>
    </>
  )
}
export default App



//list


import React, { useState } from 'react'
import Preview from './Preview'
function App(props){
  const data=["siraj","sahin","red"]

   return(
    <>
     <ul>
        {data.map((name)=> <li>{name}</li>)}
       </ul>
    </>
  )
}
export default App

///withch props to child

import React, { useState } from 'react'
import Preview from './Preview'
function App(props){
  const data=["siraj","sahin","red"]

   return(
    <>
     <ul>
        {data.map((name)=> <Preview brand={name}/>)}
       </ul>
    </>
  )
}
export default App


import React from 'react'

function Preview(props){
 
  return(
    <div>
     <li>the owner name is {props.brand}</li>
    </div>
  )

} 
export default Preview

///form 



import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));


//text area

A simple textarea with some content:

import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}


//select

function MyForm() {
    const [myCar, setMyCar] = useState("Volvo");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    )





    //fetch data and loading
    
import React,{useEffect,useState} from 'react'

function App(){
  const Loader=()=><h2>Load...</h2>
   const fetchData=async ()=>{
       const response=await fetch('https://jsonplaceholder.typicode.com/todos')
       const data=await response.json()
       return  data
      }
  const [value,setValue]=useState([])
  const [loading,setLoading]=useState(true)
  console.log(value)
      useEffect(()=>{
        fetchData().then((data)=>{
         console.log(data)
         setValue(data)
         setLoading(false)
        })
      },[])
  return(
    <div>
      {
        //we can use tag insted of <Loader/>
        loading?<Loader />:
        value.map((val,ind)=><p key={ind}>{val.title}</p>)
      }
    </div>
  )
}

export default App



// import React, { useEffect, useState } from 'react'
// // import '../styles/App.css';


// const getData = async () =>{
//   const rawData = await fetch('https://jsonplaceholder.typicode.com/todos')
//   const data = await rawData.json()
//   return data
// }
// const Loader = () => <div id="loader">Loading...</div>
// const App = () => {
//   const [todos,setTodos] = useState([])
//   const [loading,setLoading]=useState(true)
//   useEffect(()=>{
//     getData().then(data=> {
//       setTodos(data)
//       console.log(data)
//       setLoading(false)
//      })
//   },[])
//   return (
//     <div id="main">
//       {
//         loading ? <Loader /> :
//       todos.map(todo=> <div id={`todo-${todo.id}`}>{todo.title}</div>)
//       }
//     </div>
//   )
// }


// export default App;





//prop dealing solution 

import React , {useContext,createContext,useState} from 'react'
// const UserContext = createContext();
const UserContext=createContext();

function App() {
  const [data,setData]=useState("thui is prop")


  return (
    <UserContext.Provider value={data}>
      <div>hello</div>
      <Component2 user={data}/>
      </UserContext.Provider>
  )
  // const [user, setUser] = useState("Jesse Hall");

  // return (
  //   <UserContext.Provider value={user}>
  //     <h1>{`Hello ${user}!`}</h1>
  //     <Component2 user={user} />
  //   </UserContext.Provider>
  // );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user1=useContext(UserContext)
  return (
    <>
      <h1>Component {user1}3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
export default App



//