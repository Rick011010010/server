
import './App.css';
import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { addTodo } from './redux/slice';


function App() {
  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(addTodo(state));
    console.log(state)
  };
  const [state, setState] = useState("")
  function gettext(e) {
    setState(e.target.value)
  }




  //   const getData = () => {
  //       Axios.get('http://localhost:3001/todos').then((response) => {
  //         console.log(response)
  //       })
  //   }


  //    const addTodoAsync = createAsyncThunk(
  // 	'todos/addTodoAsync',
  // 	async (payload) => {
  // 		const resp = await fetch('http://localhost:3001/todos', {
  // 			method: 'POST',
  // 			headers: {
  // 				'Content-Type': 'application/json',
  // 			},
  // 			body: JSON.stringify({ title: payload.title }),
  // 		});

  // 		if (resp.ok) {
  // 			const todo = await resp.json();
  // 			return { todo };
  // 		}
  // 	}
  // );







  return (
    <div className="App">
      <div className="App w-screen h-screen text-center p-40 bg-[#000300]">
        <div className='bg-[#00df9a] flex flex-col justify-around rounded h-40'>
          <div className=''>
            <label htmlFor=""></label>
            <input type="text" className='border border-x-1 border-black' onChange={gettext} />

          </div>

          <div className='flex flex-row justify-around' >
            <button className='bg-cyan-500 hover:bg-cyan-600 text-2xl  rounded w-20'>Get</button>
            <button className='bg-cyan-500 hover:bg-cyan-600 text-2xl rounded w-20' onClick={() => handleclick()}>Post</button>
            <button className='bg-cyan-500 hover:bg-cyan-600 text-2xl rounded w-20'>Put</button>
            <button className='bg-cyan-500 hover:bg-cyan-600 text-2xl rounded w-20'>Delete</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
