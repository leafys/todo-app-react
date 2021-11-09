import React from 'react';
import './TodoListItem.scss';

import { faExclamation, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

const TodoListItem = ({
  label,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  done,
  important,
}) => {
  return (
    <div>
      <span
        className={cn([
          'todo-list-item',
          done && 'done',
          important && 'important',
        ])}
      >
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <div>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDeleted()}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={onToggleImportant}
          >
            <FontAwesomeIcon icon={faExclamation} />
          </button>
        </div>
      </span>
    </div>
  );
};

export default TodoListItem;
