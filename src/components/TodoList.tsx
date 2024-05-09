import TodoItem from './TodoItem';

import { ITodo } from '../types/data';

interface iTodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<iTodoListProps> = (props) => {
  const {items, toggleTodo, removeTodo} = props;

  return (
    <div>
      {props.items.map(todo => 
        <TodoItem 
          key={todo.id} 
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo}
          />
        )}
    </div>
  );
};

export default TodoList;