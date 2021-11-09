import React from 'react';

const Filterpanel = ({ setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <button
        onClick={statusHandler}
        value="all"
        type="button"
        className="btn btn-info"
      >
        All
      </button>
      <button
        onClick={statusHandler}
        value="active"
        type="button"
        className="btn btn-outline-secondary"
      >
        Active
      </button>
      <button
        onClick={statusHandler}
        value="done"
        type="button"
        className="btn btn-outline-secondary"
      >
        Done
      </button>
    </div>
  );
};

export default Filterpanel;
