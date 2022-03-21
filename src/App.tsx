import React from "react";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
// Other Imports
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import {
  addTodo,
  setComplete,
  setImportant,
  deleteTodo,
} from "./redux/todoSlice";

const App: React.FC = () => {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="App">
      <Header />

      <div className="container">
        <AddTodo
          addTodo={(title, description) => {
            dispatch(addTodo(title, description));
          }}
        />
        <TodoList
          list={todoList}
          setImportant={(id, imp) => {
            dispatch(setImportant({ id, imp }));
          }}
          setComplete={(id, comp) => {
            dispatch(setComplete({ id, comp }));
          }}
          setDelete={(id) => {
            dispatch(deleteTodo({ id }));
          }}
        />
      </div>
    </div>
    // <Container maxWidth="xs">
    //   <Typography style={{ textAlign: "center" }} variant="h3">
    //     Redux List App
    //   </Typography>
    //   <TextField
    //     variant="outlined"
    //     label="To Do Item"
    //     fullWidth
    //     onChange={(e) => setTitle(e.target.value)}
    //     value={title}
    //   />
    //   <TextField
    //     variant="outlined"
    //     label="To Do Item"
    //     fullWidth
    //     onChange={(e) => setDescription(e.target.value)}
    //     value={description}
    //   />
    //   <Button
    //     variant="contained"
    //     color="primary"
    //     fullWidth
    //     onClick={addTodoHandler}
    //   >
    //     Add Item
    //   </Button>
    //   <List>
    //     {todoList.map((todo) => (
    //       <ListItem key={todo.id}>
    //         <ListItemText
    //           style={{
    //             textDecoration: todo.completed ? "line-through" : "none",
    //           }}
    //         >
    //           {todo.title}
    //           {todo.description}
    //         </ListItemText>
    //         {/* <ListItemSecondaryAction> */}
    //         <IconButton
    //           onClick={() => {
    //             dispatch(deleteTodo({ id: todo.id }));
    //           }}
    //         >
    //           <DeleteIcon />
    //           <PriorityHighIcon />
    //         </IconButton>
    //         <Checkbox
    //           edge="end"
    //           value={todo.completed}
    //           onChange={() => {
    //             dispatch(
    //               changeComplete({ completed: !todo.completed, id: todo.id })
    //             );
    //           }}
    //         />
    //         {/* </ListItemSecondaryAction> */}
    //       </ListItem>
    //     ))}
    //   </List>
    // </Container>
  );
};

export default App;

// import React from "react";
// import Counter from "./features/counter/Counter";

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// };

// export default App;
