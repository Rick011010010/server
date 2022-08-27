import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"





export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async () => {
        const resp = await fetch('http://localhost:3001/todos');
        if (resp.ok) {
            const todos = await resp.json();
            return { todos };
        }
    }
);



export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:3001/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: payload.title }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);


export const userSlice = createSlice(
    {
        name: 'user',
        initialState: [],
        reducers: {

            addTodo: (state, action) => {
                const todo = {

                    title: action.payload,

                };
                state.push(todo);
            },
        },

        extraReducers: {
            [getTodosAsync.fulfilled]: (state, action) => {
                return action.payload.todos;
            },
        }
    }
)
export const { addTodo } = userSlice.actions


export default userSlice.reducer;