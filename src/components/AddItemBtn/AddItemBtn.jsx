import React, { useState } from 'react';
import './AddItemBtn.scss';

const AddItemBtn = ({ onItemAdd }) => {
  const [inputTarget, setInputTarget] = useState({ label: '' });

  const onLabelChange = (event) => {
    setInputTarget({
      label: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onItemAdd(inputTarget.label);
    setInputTarget({ label: '' });
  };

  return (
    <form onSubmit={onSubmit} className="item-add-form addButton">
      <input
        type="text"
        className="form-control"
        onChange={onLabelChange}
        placeholder="What needs to be done"
        value={inputTarget.label}
      />
      <button className="btn btn-outline-secondary add-btn">Add note</button>
    </form>
  );
};

export default AddItemBtn;
