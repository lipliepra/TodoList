import { Dispatch } from "redux";
import { SortFilterAction, LoadingAction, TodosAction, ActionsType } from "../actionsType";

export const toggleSort = (value: boolean) => {
  return (dispatch: Dispatch<SortFilterAction>) => {
    dispatch({ type: ActionsType.TOGGLE_SORT, payload: value });
  };
};

export const toggleFilter = (value: string) => {
  return (dispatch: Dispatch<SortFilterAction>) => {
    dispatch({ type: ActionsType.TOGGLE_FILTER, payload: value });
  };
};

export const addTodo = (description: string) => {
  return (dispatch: Dispatch<TodosAction | LoadingAction>) => {
    dispatch({ type: ActionsType.TOGGLE_LOADING, payload: true });

    setTimeout(() => {
      dispatch({ type: ActionsType.ADD_TODO, payload: description });
      dispatch({ type: ActionsType.TOGGLE_LOADING, payload: false });
    }, 1000);
  };
};

// Если бы был запрос на сервер, написал бы так
/* 
export const getTodos = (description: string) => {
  return async (dispatch: Dispatch<TodosAction | LoadingAction>) => {
    dispatch({ type: ActionsType.ADD_TODO, payload: description });

    await axios.get(`localhost:5000/todos`).then((res) => {
      dispatch({ 
        type: ActionsType.GET_TODO, 
        payload: res.data 
      });
      
      dispatch({ 
        type: ActionsType.TOGGLE_LOADING, 
        payload: false 
      });
    })
  };
};
*/

export const deleteTodo = (id: string) => {
  return (dispatch: Dispatch<TodosAction | LoadingAction>) => {
    dispatch({ type: ActionsType.TOGGLE_LOADING, payload: true });

    setTimeout(() => {
      dispatch({ type: ActionsType.DELETE_TODO, payload: { id } });
      dispatch({ type: ActionsType.TOGGLE_LOADING, payload: false });
    }, 1000);
  };
};

export const deleteCompletedTodos = () => {
  return (dispatch: Dispatch<TodosAction | LoadingAction | SortFilterAction>) => {
    dispatch({ type: ActionsType.TOGGLE_LOADING, payload: true });

    setTimeout(() => {
      dispatch({ type: ActionsType.DELETE_COMPLETED_TODOS });
      dispatch({ type: ActionsType.TOGGLE_LOADING, payload: false });
      dispatch({ type: ActionsType.TOGGLE_FILTER, payload: "all" });
    }, 1000);
  };
};

export const setImportant = (id: string) => {
  return (dispatch: Dispatch<TodosAction>) => {
    dispatch({ type: ActionsType.SET_IMPORTANT, payload: { id } });
  };
};

export const setComplete = (id: string) => {
  return (dispatch: Dispatch<TodosAction>) => {
    dispatch({ type: ActionsType.SET_COMPLETE, payload: { id } });
  };
};
