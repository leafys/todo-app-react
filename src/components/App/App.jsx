import React, { useEffect } from 'react';
import { useState } from 'react';

import AddItemBtn from '../AddItemBtn';
import Header from '../Header';
import Searchbar from '../Searchbar';
import TodoList from '../TodoList';
import './App.scss';

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filteredNotes = todoData.filter((notes) => {
      return notes.label.toLowerCase().includes(value.toLowerCase());
    });

    const filterHandler = () => {
      switch (status) {
        case 'done':
          setFilteredTodos(filteredNotes.filter((todo) => todo.done === true));
          break;
        case 'active':
          setFilteredTodos(filteredNotes.filter((todo) => todo.done !== true));
          break;
        default:
          setFilteredTodos(filteredNotes);
          break;
      }
    };

    filterHandler();
  }, [todoData, status, value]);

  const addItem = (text) => {
    setTodoData((state) => {
      const newItem = {
        label: text,
        done: false,
        important: false,
        id: state.length + 1,
      };

      const newArr = [...state, newItem];

      return newArr;
    });
  };

  const deleteItems = (id) => {
    setTodoData((state) => {
      const removeItems = state.filter((item) => item.id !== id);

      return removeItems;
    });
  };

  const toggleProperty = (arr, id, propName) => {
    const index = arr.findIndex((el) => el.id === id);

    const newItem = { ...arr[index], [propName]: !arr[index][propName] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  };

  const onToggleDone = (id) => {
    setTodoData((state) => {
      return toggleProperty(state, id, 'done');
    });
  };

  const onToggleImportant = (id) => {
    setTodoData((state) => {
      return toggleProperty(state, id, 'important');
    });
  };

  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className="app">
      <Header todo={todoCount} done={doneCount} />
      <Searchbar setStatus={setStatus} setValue={setValue} />
      <TodoList
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
        todos={filteredTodos}
        onDeleted={deleteItems}
      />
      <AddItemBtn onItemAdd={addItem} />
    </div>
  );
};

export default App;
