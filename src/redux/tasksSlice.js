import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",

  initialState: {
    tasks: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
  },

  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      for (const task of state.tasks) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = slice.actions;

export default slice.reducer;

//---------------------------------------------------------------

// export const addTask = createAction("tasks/addTask");
// export const deleteTask = createAction("tasks/deleteTask");
// export const toggleCompleted = createAction("tasks/toggleCompleted");

// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
// };

// export default function tasksReducer(state = initialState, action) {
//   switch (action.type) {
//     case "tasks/addTask":
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };

//     case "tasks/deleteTask":
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };

//     case "tasks/toggleCompleted":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };

//     default:
//       return state;
//   }
// }
//---------------------------------------------------------------

// http://github.com/luxplanjay/react-114/pull/new/12-redux-toolkit
